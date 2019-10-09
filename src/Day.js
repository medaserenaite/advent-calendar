import React from "react";
import { Component } from 'react'
import data from './data.jsonc'

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
      <div className="DayClass">
      <button className="backButton" onClick={this.props.goBack.bind(this)}>back</button>
        <p>this is day number {this.props.value}</p>
        <p>name:   {this.props.name}</p>
        <p>text:   {this.props.text}</p>
        <p>icon:   {this.props.icon}</p>
      </div>
    );
  }
}
