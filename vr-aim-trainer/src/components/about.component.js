
import React, { Component } from 'react';

export default class About extends Component {
    constructor(props) {
        super(props);
        console.log("opening the about page");
    }

    componentDidMount() {
        console.log("running componentdidmount in about page"); 
    }

    render() {
        return (
            <div>
                <h2>Welcome to the VR AIM Trainer about page.</h2>
                <h3>Currently under construction.</h3>
            </div>
        )
    }
}