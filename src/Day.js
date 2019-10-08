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
        

      </div>
    );
  }
}
