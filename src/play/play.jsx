import React, { useState, useEffect, useRef } from "react";
import { GameEvent, GameNotifier } from './gamePlayNotifier';
import './play.css';
import { delay } from "./delay";

export function Play() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [colorStyles, setColorStyles] = useState([]);
    const [correctColor, setCorrectColor] = useState('');
    const [username, setUsername] = useState(null);
    const [messages, setMessages] = useState([]); // State to hold incoming messages
    const [canSubmit, setCanSubmit] = useState(true); // Track if the submit button should be enabled
    const currentDate = new Date().toISOString();

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch('/api/auth/username', {
                    method: 'GET',
                    credentials: 'include', // Ensure cookies are sent with the request
                });
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username || "Guest");
                    setHighScore(data.highScore || 0);
                } else {
                    console.error("Failed to fetch user data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        
        }

        fetchUserData();
        randomizeColors();

        // Add a handler to listen for game events
        GameNotifier.addHandler(handleGameEvent);

        return () => {
            GameNotifier.removeHandler(handleGameEvent);
        };
    }, []);

    const getUsername = async () => {
        if (!username) {
            try {
                const response = await fetch('/api/auth/username', {
                    method: 'GET',
                    credentials: 'include', // Ensure cookies are sent with the request
                });
                if (response.ok) {
                    const data = await response.json();
                    setUsername(data.username || "Guest");
                    setHighScore(data.highScore || 0);
                } else {
                    console.error("Failed to fetch user data:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        }
    };

    const handleGameEvent = async (event) => {
        await getUsername();
        if (event.type === GameEvent.System) {
            console.log(event.value.msg);
            setMessages(prevMessages => [...prevMessages,'user connected']);
        } else if (event.type === GameEvent.Score) {
            const { user, score } = event.value;
            console.log(`${user} scored: ${score}`);
            setMessages(prevMessages => [...prevMessages, `${user} scored: ${score}`]);
        }
    };


    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    function randomizeColors() {
        const colors = Array.from({ length: 6 }, getRandomRGB);
        const randomIndex = Math.floor(Math.random() * colors.length);
        setCorrectColor(colors[randomIndex]);
        setColorStyles(colors.map(color => ({ backgroundColor: color })));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const selectedColor = event.target.color.value;
        const selectedColorRGB = colorStyles[parseInt(selectedColor.split(" ")[1]) - 1].backgroundColor;

        if (selectedColorRGB === correctColor) {
            const newScore = score + 1;
            setScore(newScore);

            
        } 
        else {
            if (score > highScore) {
                setHighScore(score);
                try {
                    await fetch('/api/score', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username,
                            score: score,
                            date: currentDate,
                        }),
                    });
                } catch (error) {
                    console.error("Error submitting high score:", error);
                }
            }
            const tempScore = score;
            setScore(0);
            if (score > 0) {
                GameNotifier.broadcastEvent(username, GameEvent.Score, { user: username, score: tempScore });
            }
        }

        randomizeColors();
    };

    if (!username) {
        return <p>Please Login to play 🙂</p>;
    }

    return (
        <main>
            <div className="play-div">
                Player: {username} <br /> High Score: {highScore} <br /> Current Score: {score}
            </div>

            {/* Display incoming messages */}
            <div className="messages">
                {messages.splice(-3).map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </div>

            <form id="colorForm" onSubmit={handleSubmit}>
                <p style={{ textAlign: 'center' }}>
                    RGB Value: {correctColor}
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 1" required />
                                    <div className="color-box" style={colorStyles[0]}>Color 1</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 2" />
                                    <div className="color-box" style={colorStyles[1]}>Color 2</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 3" />
                                    <div className="color-box" style={colorStyles[2]}>Color 3</div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 4" />
                                    <div className="color-box" style={colorStyles[3]}>Color 4</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 5" />
                                    <div className="color-box" style={colorStyles[4]}>Color 5</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 6" />
                                    <div className="color-box" style={colorStyles[5]}>Color 6</div>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div style={{ textAlign: 'center' }}>
                    {/* Enable the submit button based on canSubmit state */}
                    <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </main>
    );
}
