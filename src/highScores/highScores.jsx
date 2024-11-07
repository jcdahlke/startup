import React from "react";

export function HighScores() {
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
                                <tr>
                                    <td><span style={{ color: 'gold' }}>1</span>🥇</td>
                                    <td>Gabbi</td>
                                    <td>100</td>
                                    <td>May 14, 2021</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: 'silver' }}>2</span>🥈</td>
                                    <td>James</td>
                                    <td>51</td>
                                    <td>June 2, 2021</td>
                                </tr>
                                <tr>
                                    <td><span style={{ color: '#CD7F32' }}>3</span>🥉</td>
                                    <td>Matthew</td>
                                    <td>42</td>
                                    <td>July 3, 2020</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Jacob</td>
                                    <td>39</td>
                                    <td>July 18, 2021</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Joseph</td>
                                    <td>30</td>
                                    <td>April 30, 2020</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Rachael</td>
                                    <td>28</td>
                                    <td>December 20, 2022</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Taylor</td>
                                    <td>18</td>
                                    <td>October 23, 2023</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Mckayla</td>
                                    <td>16</td>
                                    <td>August 1, 2023</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Bryan</td>
                                    <td>15</td>
                                    <td>May 20, 2021</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Kev</td>
                                    <td>11</td>
                                    <td>January 15, 2022</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}
