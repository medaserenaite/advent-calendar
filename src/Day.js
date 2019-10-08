import React from "react";
import { Component } from 'react'
import data from './data.json'

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

      componentDidMount() {
          // console.log(this.props.isDay1Hidden)
          console.log(this.props.value)
      }

  render() {
    return (
      <div className="DayClass">
      <button className="backButton" onClick={this.props.goBack.bind(this)}>back</button>

        <p>this is day numebr {this.props.value}</p>

      </div>
    );
  }
}
