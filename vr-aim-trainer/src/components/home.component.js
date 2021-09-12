
import React, { Component } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);
        console.log("opening the home page");
    }

    componentDidMount() {
        console.log("running componentdidmount in home page"); 
    }

    render() {
        return (
            <div>
                <h2>Welcome to the VR AIM Trainer home page.</h2>
                <h3>Currently under construction.</h3>
            </div>
        )
    }
}