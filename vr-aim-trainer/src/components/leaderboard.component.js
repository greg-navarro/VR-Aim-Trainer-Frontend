
import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';
import AsyncCreatableSelect from 'react-select/async-creatable';
import axios from 'axios';


const Score = props => (
    <tr>
        <td>#{props.i}</td>
        <td>{props.score.points}</td>
        <td>{props.score.name}</td>
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
        console.log("Retrieve scores from the db here!"); // TODO get scores
        // Insert test scores
        let testScores = [
            {
                points: 100,
                name: "Txato",
                date: "June 12, 1900"
            },
            {
                points: 80,
                name: "Joxe",
                date: "July 13, 1830"
            }
        ]
        this.setState({
            scores: testScores
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
                <Score score={currentScore} i={i} key={currentScore.id.toString()}/>
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