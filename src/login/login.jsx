import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // Check if username and password are not empty
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in both the username and password fields.");
            return;
        }
        // Logic for login goes here
        navigate("/play", { state: { username } });
    };

    const handleCreateAccount = () => {
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in both the username and password fields.");
            return;
        }
        navigate("/play", { state: { username } });
    };

    const handleGuestLogin = () => {
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
                    <span>👤</span>
                    <input
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <span>🔒</span>
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
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
