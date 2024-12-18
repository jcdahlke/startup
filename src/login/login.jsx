import React, { useState, useEffect } from "react";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const [displayError, setDisplayError] = useState(""); // For displaying errors

    // Check if the user is already logged in when the component mounts
    useEffect(() => {
        const storedUsername = localStorage.getItem("userName");
        const token = localStorage.getItem("authToken"); // Check if auth token is stored
        if (storedUsername && token) {
            setUsername(storedUsername);
            setLoggedIn(true);
        }
    }, []);

    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
    }

    async function createUser() {
        loginOrCreate(`/api/auth/create`);
    }

    async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({ username: username, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });

        // console.log("Request sent:", { username, password }); // Log the request body

        if (response.ok) {
            const body = await response.json();
            // Assuming the response contains a token in `body.token`
            const { token } = body;
            localStorage.setItem('userName', username);  // Store username
            localStorage.setItem('authToken', token);   // Store auth token
            setLoggedIn(true);
        } else {
            const errorBody = await response.text();
            // console.error("Error response:", errorBody); // Log the error body
            const parsedError = errorBody ? JSON.parse(errorBody) : { msg: "Unknown error" };
            setDisplayError(`⚠ Error: ${parsedError.msg || "An error occurred"}`);
        }
    }

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'DELETE',
        })
        .catch(() => {
            // Logout failed. Assuming offline
        })
        .finally(() => {
            localStorage.removeItem('userName');
            localStorage.removeItem('authToken');  // Remove auth token on logout
            setLoggedIn(false); // Reset loggedIn state on logout
        });
    }

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
                    <button type="button" className="btn btn-secondary" onClick={logout}>
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
                    <button type="button" className="btn btn-primary" onClick={loginUser}>
                        Login
                    </button>
                    <button type="button" className="btn btn-secondary" onClick={createUser}>
                        Create Account
                    </button>
                    {/* <button type="button" className="btn btn-secondary" onClick={() => alert("Guest login not yet implemented")}>
                        Guest
                    </button> */}
                    {displayError && <div className="error">{displayError}</div>}
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
