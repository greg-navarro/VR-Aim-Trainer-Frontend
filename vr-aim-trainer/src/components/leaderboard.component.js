
import React, { Component } from 'react';
import axios from 'axios';


const Score = props => (
    <tr>
        <td>#{props.i + 1}</td>
        <td>{props.score.points}</td>
        <td>{props.score.userID}</td>
        <td>{props.score.date}</td>
    </tr>
)

export default class Leaderboard extends Component {
    constructor(props) {
        super(props);

        // bind to methods
        this.scoreList = this.scoreList.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // set state TODO add a time
        this.state = {
            scores: [],
            date: Date(),
        }
    }

    componentDidMount() {
        console.log("Retrieve scores from the db here!"); 
        axios.get("http://localhost:3456/scores?topScores=2")
            .then((response) => {
                this.setState({scores: response.data})
                console.log("SUCESS", response.data)
            }).catch((error) => {
                console.log("ERROR retrieving top scores: " + error)
            });
    }


    onSubmit(e) {
        e.preventDefault();
        console.log("form has been submitted")
    }

    scoreList() {
        let scoresElements = []
        for (let i = 0; i < this.state.scores.length; i++) {
            const currentScore = this.state.scores[i];
            scoresElements.push(
                <Score score={currentScore} i={i} key={currentScore._id}/>
            )
        }
        console.log(scoresElements); // TODO remove
        return scoresElements
    }

    render() {
        return (
            <div>
                <h2>Leaderboard</h2>
                <h3>Date: {this.state.date.substring(0,10)}</h3>
        
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Rank</th>
                            <th>Score</th>
                            <th>Name</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.scoreList() }
                    </tbody>
                </table>
                {/* TODO add a select component here to toggle number of scores shown */}
            </div>
        )
    }


}