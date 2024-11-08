import React from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Logic for login goes here
        navigate("/play");
    };

    const handleCreateAccount = () => {
        // Logic for account creation
        console.log("Create account clicked");
        navigate("/play");
    };

    const handleGuestLogin = () => {
        // Logic for guest access
        console.log("Guest login clicked");
        navigate("/play");
    };

    return (
        <main>
            <h1>
                Welcome to <span style={{ color: "red" }}>R</span>
                <span style={{ color: "green" }}>G</span>
                <span style={{ color: "blue" }}>B</span> Color Guesser
            </h1>
            <form>
                <div>
                    <span>@</span>
                    <input type="text" placeholder="your@email.com" />
                </div>
                <div>
                    <span>🔒</span>
                    <input type="password" placeholder="password" />
                </div>
                <button type="button" className="btn btn-primary" onClick={handleLogin}>
                    Login
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCreateAccount}>
                    Create
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleGuestLogin}>
                    Guest
                </button>
            </form>
            <img
                id="color-splash"
                src="https://cdn.pixabay.com/photo/2015/05/30/10/56/colorful-790254_1280.jpg"
                alt="rgb colors display"
                width="500"
            />
        </main>
    );
}
