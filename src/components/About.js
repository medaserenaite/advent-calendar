import React from "react";
import { Component } from 'react'
import "../styles/About.scss";


export default class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        };
      }

      componentDidMount() {

      }

  render() {
    return (
      <div className="About">
            <button className="backButton" onClick={this.props.goBack.bind(this)}>back</button>
            <p>Hey, boifren!</p>
            <p>I made you an advent calendar so you (maybe)have fun while Christmas is slowly sneaking up</p>

            <p>What to expext?</p>
            <p>Everyday after midnight, a new day will become available for you to click on!<br/>You can click on it right after the clock dings OR in the morning OR whenever you feel like it!</p>

            <p>What's inside the Click?</p>
            <p>I tried to collect some of my favorite pictures of our time together and remember some my favorite moments with you.<br/>After you read OR not read the story, at the end, I will reveal the icon of the day, which will tell you, which gift you can open that day!</p>
      </div>
    );
  }
}
