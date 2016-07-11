/**
 * Created by tanjiasheng on 2016/7/6.
 */
import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class testApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: "test"
        };
        this.handleClick = () => {
            hashHistory.push('/test1');
        }
    }

    render() {
        return (
          <div onClick = {this.handleClick}>12312312</div>
        );
    }
}