import React from "react";
import { Component } from 'react'
import '../styles/Day.scss'
// import data from '../data.jsonc'
// import DateCountdown from "react-date-countdown-timer";

export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
      }

      componentDidMount() {
          // console.log(this.props.value)
      }

  render() {
    return (
      <div className="Day">
        <img className="Day__image" src="https://via.placeholder.com/150" alt=""/>
        <div className="Day__material">
        <p>Day {this.props.value}</p>
        <p>{this.props.name}</p>
        <p>{this.props.text}</p>
        {/* <p>icon:{this.props.icon}</p> */}
        </div>
        <button className="backButton" onClick={this.props.goBack.bind(this)}>back</button>
      </div>
    );
  }
}
