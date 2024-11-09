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
        // Simulated fetching data from an API or external source
        const fetchedScores = [
            { rank: '1🥇', name: 'Gabbi', score: 100, date: 'May 14, 2021' },
            { rank: '2🥈', name: 'James', score: 51, date: 'June 2, 2021' },
            { rank: '3🥉', name: 'Matthew', score: 42, date: 'July 3, 2020' },
            { rank: 4, name: 'Jacob', score: 39, date: 'July 18, 2021' },
            { rank: 5, name: 'Joseph', score: 30, date: 'April 30, 2020' },
            { rank: 6, name: 'Rachael', score: 28, date: 'December 20, 2022' },
            { rank: 7, name: 'Taylor', score: 18, date: 'October 23, 2023' },
            { rank: 8, name: 'Mckayla', score: 16, date: 'August 1, 2023' },
            { rank: 9, name: 'Bryan', score: 15, date: 'May 20, 2021' },
            { rank: 10, name: 'Kev', score: 11, date: 'January 15, 2022' }
        ];
        setScores(fetchedScores);
    }, []);

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
