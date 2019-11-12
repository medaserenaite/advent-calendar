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

      <div className="Day" id="day">
        <div className="Day__material">
          <p className="Day__number">Day {this.props.value}</p>
          <p className="Day__name">{this.props.name}</p>
          <img className="Day__image" src="https://via.placeholder.com/150" alt=""/>
          <p className="Day__text">{this.props.text}</p>
          <p className="Day_icon">icon of the day: {this.props.icon}</p>
        </div>
        <button className="backButton" onClick={this.props.goBack.bind(this)}>back</button>
</div>
    );
  }
}
