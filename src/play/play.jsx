import React, { useState } from "react";
import './play.css'

export function Play() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(25);
    const [username, setUsername] = useState("Username here");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to check the selected color and update score goes here
        // Example: if the selected color matches, increment score, otherwise reset score
        const selectedColor = event.target.color.value;
        if (selectedColor === "Color 1") {  // Assuming "Color 1" is the correct answer for example
            setScore(score + 1);
        } else {
            setScore(0); // Reset score if incorrect
        }
    };

    return (
        <main>
            <div className="play-div">
                Player: {username} <br /> High Score: {highScore} <br /> Current Score: {score}
            </div>
            <form id="colorForm" onSubmit={handleSubmit}>
                <p style={{ textAlign: 'center' }}>
                    RGB Value: (<span className="red-underline">000</span>, <span className="green-underline">000</span>, <span className="blue-underline">000</span>)
                </p>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 1" />
                                    <div className="color-box" style={{ backgroundColor: 'aqua' }}>Color 1</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 2" />
                                    <div className="color-box" style={{ backgroundColor: 'coral' }}>Color 2</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 3" />
                                    <div className="color-box" style={{ backgroundColor: 'darkgreen' }}>Color 3</div>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 4" />
                                    <div className="color-box" style={{ backgroundColor: 'crimson' }}>Color 4</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 5" />
                                    <div className="color-box" style={{ backgroundColor: 'rgb(186, 38, 206)' }}>Color 5</div>
                                </label>
                            </td>
                            <td>
                                <label>
                                    <input type="radio" name="color" value="Color 6" />
                                    <div className="color-box" style={{ backgroundColor: 'pink' }}>Color 6</div>
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
