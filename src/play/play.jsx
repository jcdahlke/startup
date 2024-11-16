import React, { useState, useEffect } from "react";
import './play.css';

export function Play() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [colorStyles, setColorStyles] = useState([]);
    const [correctColor, setCorrectColor] = useState('');
    const [username, setUsername] = useState(null); // Initially null until fetched
    const [token, setToken] = useState(null);
    const currentDate = new Date().toISOString()

    useEffect(() => {
        // Fetch username from localStorage directly
        const storedUsername = localStorage.getItem("userName");
        if (storedUsername) {
            setUsername(storedUsername);
        } else {
            setUsername("Guest"); // Fallback to "Guest" if no username is found
        }
        randomizeColors();
    }, []);

    useEffect(() => {
        if (username) {
            // Fetch user's high score when username is set
            async function fetchHighScore() {
                try {
                    const response = await fetch(`/api/scores?username=${username}`);
                    if (response.ok) {
                        const data = await response.json();
                        setHighScore(data.highScore || 0);
                    }
                } catch (error) {
                    console.error("Error fetching high score:", error);
                }
            }

            fetchHighScore();
        }
    }, [username]);

    // Function to generate a random RGB color
    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to randomize color styles and set the correct color
    function randomizeColors() {
        const colors = [
            getRandomRGB(),
            getRandomRGB(),
            getRandomRGB(),
            getRandomRGB(),
            getRandomRGB(),
            getRandomRGB()
        ];

        const randomIndex = Math.floor(Math.random() * 6);
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

            if (newScore > highScore) {
                setHighScore(newScore);

                // Send the new high score to the backend
                try {
                    await fetch('/api/score', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            username,
                            score: newScore,
                            date: currentDate, // Send the date with the score
                        })
                    });
                } catch (error) {
                    console.error("Error submitting high score:", error);
                }
            }
        } else {
            setScore(0); // Reset score if incorrect
        }

        randomizeColors();
    };

    if (!username) {
        return <p>Loading...</p>; // Wait until the username is fetched from localStorage
    }

    return (
        <main>
            <div className="play-div">
                Player: {username} <br /> High Score: {highScore} <br /> Current Score: {score}
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </main>
    );
}
