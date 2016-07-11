/**
 * Created by tanjiasheng on 2016/7/11.
 */
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "index"
        };
        this.handleClick = () => {
            hashHistory.push('/test');
        }
    }

    render() {
        return (
            <div onClick = {this.handleClick}>index</div>
        );
    }
}