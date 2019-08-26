import React from "react";
import { Component } from 'react'

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
      }

      componentDidMount() {
          console.log(this.props.isDay1Hidden)
      }
  render() {
    return (
      <div className="DayClass">
        {null ? (
        <div className="Day1">day1</div>
        ) : this.props.isDay1Hidden}

        <div className="Day2">day2</div>

        <div className="Day3">day3</div>

        <div className="Day4">day4</div>

        <div className="Day5">day5</div>

        <div className="Day6">day6</div>

        <div className="Day7">day7</div>

        <div className="Day8">day8</div>

      </div>
    );
  }
}
