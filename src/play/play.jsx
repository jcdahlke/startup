import React, { useState, useEffect } from "react";
import './play.css'

export function Play() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [username, setUsername] = useState("Username here");
    const [colorStyles, setColorStyles] = useState([]);
    const [correctColor, setCorrectColor] = useState('');

    // Function to generate a random RGB color
    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    // Function to randomize color styles and set correct color
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

    // Call randomizeColors initially when the component is mounted
    useEffect(() => {
        randomizeColors();
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Get the selected color
        const selectedColor = event.target.color.value;
        const selectedColorRGB = colorStyles[parseInt(selectedColor.split(" ")[1]) - 1].backgroundColor;

        // Check if the selected color matches the correct color
        if (selectedColorRGB === correctColor) {
            const newScore = score + 1;
            setScore(newScore);

            // Check if the new score is higher than the high score and update it
            if (newScore > highScore) {
                setHighScore(newScore);
            }
        } else {
            setScore(0); // Reset score if incorrect
        }

        // After form submission, randomize the colors again
        randomizeColors();
    };

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
                                    <input type="radio" name="color" value="Color 1" />
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
