import React, { useState, useEffect } from "react";
import './highScores.css';

// Individual ScoreRow component
function ScoreRow({ rank, name, score, date }) {
    return (
        <tr>
            <td>{rank}</td>
            <td>{name}</td>
            <td>{score}</td>
            <td>{date}</td>
        </tr>
    );
}

export function HighScores() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        async function fetchHighScores() {
            try {
                // Fetch the high scores from the backend API
                const response = await fetch('/api/scores');
                if (response.ok) {
                    const data = await response.json();

                    // Format the data to add a rank and formatted date
                    const formattedScores = data.map((score, index) => ({
                        rank: `${index + 1} ${getRankSuffix(index + 1)}`,
                        name: score.username,  // Assuming the username is part of the score object
                        score: score.score,
                        date: formatDate(score.date)  // Assuming the score object contains a date
                    }));

                    setScores(formattedScores);
                }
            } catch (error) {
                console.error("Error fetching high scores:", error);
            }
        }

        fetchHighScores();
    }, []);

    // Helper function to get the rank suffix (e.g., 1st, 2nd, 3rd)
    function getRankSuffix(rank) {
        if (rank % 10 === 1 && rank !== 11) return "🥇";
        if (rank % 10 === 2 && rank !== 12) return "🥈";
        if (rank % 10 === 3 && rank !== 13) return "🥉";
        return "th";
    }

    // Helper function to format the date (assumes date is in ISO format)
    function formatDate(date) {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' });
    }

    return (
        <main>
            <div className="container">
                <h2 className="text-center my-4">High Scores</h2>
                <div className="row">
                    <div className="col">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Score</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scores.map((score, index) => (
                                    <ScoreRow
                                        key={index}
                                        rank={score.rank}
                                        name={score.name}
                                        score={score.score}
                                        date={score.date}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
