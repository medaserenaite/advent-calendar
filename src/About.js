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
      <div className="About">
                <button className="backButton" onClick={this.props.goBack.bind(this)}>back</button>

          about
      </div>
    );
  }
}
