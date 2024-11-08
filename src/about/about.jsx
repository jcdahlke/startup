import React from "react";
import './about.css'

export function About() {
    return (
        <main>
            <h2>What is <span style={{ color: 'red' }}>R</span><span style={{ color: 'green' }}>G</span><span style={{ color: 'blue' }}>B</span>?</h2>
            <div className="rgb-color-wheel">
                <img 
                    src="https://media.istockphoto.com/id/469119596/vector/isolated-circular-rainbow-gradient.jpg?s=612x612&w=0&k=20&c=Ewqrbzc1Hicb_IOsjdxk7-kFPxEq3BfAxDTJUk4AGMA=" 
                    alt="RGB Color Wheel" 
                    width="150" 
                />
            </div>
            <p>
                <span style={{ color: 'red' }}>R</span><span style={{ color: 'green' }}>G</span><span style={{ color: 'blue' }}>B</span> stands for Red, Green, and Blue, which are the three primary colors of light used in digital displays like computer monitors, TVs, and phone screens.
                <br /> By mixing different intensities of these three colors, we can create a wide range of other colors.
                <br /><br />
                Here’s how it works:
            </p>
            <ul>
                <li>Red, Green, and Blue are the base colors.</li>
                <li>Each color can have a value between 0 (no intensity) and 255 (full intensity).</li>
                <li>When you combine different values of these three colors, you get different colors. For example:</li>
                <li>Full red (<span style={{ textDecoration: 'underline', color: 'red' }}>255</span>,<span style={{ textDecoration: 'underline', color: 'green' }}>000</span>,<span style={{ textDecoration: 'underline', color: 'blue' }}>000</span>) gives you red.</li>
                <li>Full green (<span style={{ textDecoration: 'underline', color: 'red' }}>000</span>,<span style={{ textDecoration: 'underline', color: 'green' }}>255</span>,<span style={{ textDecoration: 'underline', color: 'blue' }}>000</span>) gives you green.</li>
                <li>Full blue (<span style={{ textDecoration: 'underline', color: 'red' }}>000</span>,<span style={{ textDecoration: 'underline', color: 'green' }}>000</span>,<span style={{ textDecoration: 'underline', color: 'blue' }}>255</span>) gives you blue.</li>
                <li>Combining red, green, and blue at full intensity (<span style={{ textDecoration: 'underline', color: 'red' }}>255</span>,<span style={{ textDecoration: 'underline', color: 'green' }}>255</span>,<span style={{ textDecoration: 'underline', color: 'blue' }}>255</span>) gives you white.</li>
                <li>No light at all (<span style={{ textDecoration: 'underline', color: 'red' }}>000</span>,<span style={{ textDecoration: 'underline', color: 'green' }}>000</span>,<span style={{ textDecoration: 'underline', color: 'blue' }}>000</span>) results in black.</li>
                <li>This system is the foundation for most of the colors you see on digital screens!</li>
            </ul>

            <h2>How to Play</h2>
            <p>
                You will be presented with a random <span style={{ color: 'red' }}>R</span><span style={{ color: 'green' }}>G</span><span style={{ color: 'blue' }}>B</span> color value (ex. (<span style={{ textDecoration: 'underline', color: 'red' }}>213</span>,<span style={{ textDecoration: 'underline', color: 'green' }}>198</span>,<span style={{ textDecoration: 'underline', color: 'blue' }}>002</span>) 213 is the Red Intensity, 198 is the Green Intensity, and 2 is the Blue Intensity)
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
                <br /> Your job is to figure out what color that makes. You will be presented with 6 displays of colors. 5 of them have been randomly generated
                <br /> while the 6th one actually shows the color display that corresponds to the value that was given. So, you must select the color you think is the
                <br /> perfect match and hit submit. If you are correct, you get a point; if not, you lose all your points. Compete against family and friends to see
                <br /> who knows their colors the best! Click play at the top to start!
            </p>
        </main>
    );
}
