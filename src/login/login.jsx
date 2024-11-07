import React from "react";

export function Login() {
    return (
        <main>
            <h1>Welcome to <span style={{ color: "red" }}>R</span><span style={{ color: "green" }}>G</span><span style={{ color: "blue" }}>B</span> Color Guesser</h1>
            <form method="get" action="play.html">
                <div>
                    <span>@</span>
                    <input type="text" placeholder="your@email.com" />
                </div>
                <div>
                    <span>🔒</span>
                    <input type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
                <button type="submit" className="btn btn-secondary">Guest</button>
            </form>
            <img id="color-splash" src="https://cdn.pixabay.com/photo/2015/05/30/10/56/colorful-790254_1280.jpg" alt="rgb colors display" width="500" />
        </main>
    );
}
