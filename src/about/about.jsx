import React from "react";
import './about.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export function About() {
    return (
        <main>
            <h2>
                What is <span style={{ color: 'red' }}>R</span><span style={{ color: '#32CD32' }}>G</span><span style={{ color: 'blue' }}>B</span>?
            </h2>

            {/* Collapse Button */}
            <button 
                className="btn btn-info mb-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseRGB"
                aria-expanded="false" 
                aria-controls="collapseRGB"
            >
                Learn More
            </button>

            {/* Collapsible Content */}
            <div className="collapse" id="collapseRGB">
                <div className="card card-body">
                    <div className="rgb-color-wheel">
                        <img 
                            src="https://media.istockphoto.com/id/469119596/vector/isolated-circular-rainbow-gradient.jpg?s=612x612&w=0&k=20&c=Ewqrbzc1Hicb_IOsjdxk7-kFPxEq3BfAxDTJUk4AGMA=" 
                            alt="RGB Color Wheel" 
                            width="150" 
                        />
                    </div>
                    <p>
                        <span style={{ color: '#FF4500' }}>R</span><span style={{ color: '#32CD32' }}>G</span><span style={{ color: 'blue' }}>B</span> stands for Red, Green, and Blue, which are the three primary colors of light used in digital displays like computer monitors, TVs, and phone screens.
                        <br /> By mixing different intensities of these three colors, we can create a wide range of other colors.
                        <br /><br />
                        Here’s how it works:
                    </p>
                    <ul>
                        <li>Red, Green, and Blue are the base colors.</li>
                        <li>Each color can have a value between 0 (no intensity) and 255 (full intensity).</li>
                        <li>Combining these values creates different colors. For example:</li>
                        <li>Full red (<span style={{ color: 'red' }}>255</span>, <span style={{ color: '#32CD32' }}>0</span>, <span style={{ color: 'blue' }}>0</span>) gives you red.</li>
                        <li>Full green (<span style={{ color: 'red' }}>0</span>, <span style={{ color: '#32CD32' }}>255</span>, <span style={{ color: 'blue' }}>0</span>) gives you green.</li>
                        <li>Full blue (<span style={{ color: 'red' }}>0</span>, <span style={{ color: '#32CD32' }}>0</span>, <span style={{ color: 'blue' }}>255</span>) gives you blue.</li>
                        <li>Full intensity of all three (<span style={{ color: 'red' }}>255</span>, <span style={{ color: '#32CD32' }}>255</span>, <span style={{ color: 'blue' }}>255</span>) results in white.</li>
                        <li>No intensity (<span style={{ color: 'red' }}>0</span>, <span style={{ color: '#32CD32' }}>0</span>, <span style={{ color: 'blue' }}>0</span>) is black.</li>
                        <li>This system is foundational for most digital screen colors!</li>
                    </ul>
                </div>
            </div>

            <h2>How to Play</h2>

            {/* Collapse Button for "How to Play" */}
            <button 
                className="btn btn-info mb-2" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapsePlay"
                aria-expanded="false" 
                aria-controls="collapsePlay"
            >
                Learn How to Play
            </button>

            {/* Collapsible Content */}
            <div className="collapse" id="collapsePlay">
                <div className="card card-body">
                    <p>
                        You will be presented with a random <span style={{ color: 'red' }}>R</span><span style={{ color: '#32CD32' }}>G</span><span style={{ color: 'blue' }}>B</span> color value (e.g., (<span style={{ color: 'red' }}>213</span>, <span style={{ color: '#32CD32' }}>198</span>, <span style={{ color: 'blue' }}>2</span>)). Your task is to determine the color that matches this value.</p>
                        <div 
                            style={{
                                width: '60px', 
                                height: '60px', 
                                textAlign: 'center', 
                                border: '2px solid black', 
                                backgroundColor: 'rgb(213, 198, 2)', 
                                color: 'black', 
                                fontSize: 'small'
                            }}
                        >
                            example
                        </div>
                    <p>
                        <br /> Choose from 6 color displays—5 randomly generated and one that matches the given value. Select the correct one, submit your<br /> answer, and earn points if correct. Incorrect guesses reset your score. Play with friends and family to see who knows their colors best!
                    </p>
                </div>
            </div>
        </main>
    );
}
