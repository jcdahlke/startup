import React, { useState } from "react";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false); // Track if user is logged in

    const handleLogin = () => {
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in both the username and password fields.");
            return;
        }
        // Logic for login goes here
        setLoggedIn(true); // Set the user as logged in
    };

    const handleCreateAccount = () => {
        if (username.trim() === "" || password.trim() === "") {
            alert("Please fill in both the username and password fields.");
            return;
        }
        setLoggedIn(true); // Set the user as logged in
    };

    const handleGuestLogin = () => {
        console.log("Guest login clicked");
        setLoggedIn(true); // Treat guest login as logged in
    };

    const handleLogout = () => {
        setUsername("");
        setPassword("");
        setLoggedIn(false); // Log the user out
    };

    return (
        <main>
            <h1>
                Welcome to <span style={{ color: "red" }}>R</span>
                <span style={{ color: "green" }}>G</span>
                <span style={{ color: "blue" }}>B</span> Color Guesser
            </h1>
            {loggedIn ? (
                <div>
                    <h2>Hello, {username || "Guest"}!</h2>
                    <button type="button" className="btn btn-secondary" onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            ) : (
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
            )}
            <img
                id="color-splash"
                src="https://cdn.pixabay.com/photo/2015/05/30/10/56/colorful-790254_1280.jpg"
                alt="rgb colors display"
                width="500"
            />
        </main>
    );
}
