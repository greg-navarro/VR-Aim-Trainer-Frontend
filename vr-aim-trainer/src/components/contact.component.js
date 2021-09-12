
import React, { Component } from 'react';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        console.log("opening the contact page");
    }

    componentDidMount() {
        console.log("running componentdidmount in home page"); 
    }

    render() {
        return (
            <div>
                <h2>Welcome to the VR AIM Trainer contact page.</h2>
                <h3>Currently under construction.</h3>
            </div>
        )
    }
}