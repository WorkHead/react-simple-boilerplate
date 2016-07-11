/**
 * Created by tanjiasheng on 2016/7/6.
 */
import React, { Component } from 'react';

export default class test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "test"
        };
    }

    render() {
        return (
            <div>{this.state.test}</div>
        );
    }
}