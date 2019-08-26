import React from "react";
import { Component } from "react";
import "./Calendar.scss";
import Day from "./Day";
import DateCountdown from "react-date-countdown-timer";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: false,
      isDay7Visible: false,
      isDay8Visible: false
    };
    this.day1Click = this.day1Click.bind(this);
    this.day2Click = this.day2Click.bind(this);
    this.day3Click = this.day3Click.bind(this);
    this.day4Click = this.day4Click.bind(this);
    this.day5Click = this.day5Click.bind(this);
    this.day6Click = this.day6Click.bind(this);
    this.day7Click = this.day7Click.bind(this);
    this.day8Click = this.day8Click.bind(this);
  }

  day1Click() {
    this.setState({
      isDay1Visible: true
    });
  }

  day2Click() {
    this.setState({
      isDay2Visible: true
    });
  }
  day3Click() {
    this.setState({
      isDay3Visible: true
    });
  }
  day4Click() {
    this.setState({
      isDay4Visible: true
    });
  }
  day5Click() {
    this.setState({
      isDay5Visible: true
    });
  }
  day6Click() {
    this.setState({
      isDay6Visible: true
    });
  }
  day7Click() {
    this.setState({
      isDay7Visible: true
    });
  }
  day8Click() {
    this.setState({
      isDay8Visible: true
    });
  }


  render() {
    return (
      <div className="CalendarDiv">
<div className="DateCountdown">
    <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" />

</div>


        <div class="table-container" role="table" aria-label="Destinations">
          <div class="flex-table header" role="rowgroup">
            <div class="flex-row first empty" role="columnheader">
              Monday
            </div>
            <div class="flex-row empty" role="columnheader">
              Tuesday
            </div>
            <div class="flex-row empty" role="columnheader">
              Wednesday
            </div>
            <div class="flex-row empty" role="columnheader">
              Thursday
            </div>
            <div class="flex-row empty" role="columnheader">
              Friday
            </div>
            <div class="flex-row empty" role="columnheader">
              Saturday
            </div>
            <div class="flex-row empty" role="columnheader">
              Sunday
            </div>
          </div>
          <div class="flex-table row" role="rowgroup">
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row cell" onClick={this.day1Click} value="1">
              1
            </div>
          </div>

          <div class="flex-table row" role="rowgroup">
            <div class="flex-row cell" onClick={this.day2Click}>
              2
            </div>
            <div class="flex-row cell" onClick={this.day3Click}>
              3
            </div>
            <div class="flex-row cell" onClick={this.day4Click}>
              4
            </div>
            <div class="flex-row cell" onClick={this.day5Click}>
              5
            </div>
            <div class="flex-row cell" onClick={this.day6Click}>
              6
            </div>
            <div class="flex-row cell" onClick={this.day7Click}>
              7
            </div>
            <div class="flex-row cell" onClick={this.day8Click}>
              8
            </div>
          </div>

          <div class="flex-table row" role="rowgroup">
            <div class="flex-row cell">9</div>
            <div class="flex-row cell">10</div>
            <div class="flex-row cell">11</div>
            <div class="flex-row cell">12</div>
            <div class="flex-row cell">13</div>
            <div class="flex-row cell">14</div>
            <div class="flex-row cell">15</div>
          </div>

          <div class="flex-table row" role="rowgroup">
            <div class="flex-row cell">16</div>
            <div class="flex-row cell">17</div>
            <div class="flex-row cell">18</div>
            <div class="flex-row cell">19</div>
            <div class="flex-row cell">20</div>
            <div class="flex-row cell">21</div>
            <div class="flex-row cell">22</div>
          </div>

          <div class="flex-table row" role="rowgroup">
            <div class="flex-row cell">23</div>
            <div class="flex-row cell">24</div>
            <div class="flex-row cell">25</div>
            <div class="flex-row cell">26</div>
            <div class="flex-row cell">27</div>
            <div class="flex-row cell">28</div>
            <div class="flex-row cell">29</div>
          </div>

          <div class="flex-table row" role="rowgroup">
            <div class="flex-row cell">30</div>
            <div class="flex-row cell">31</div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
            <div class="flex-row empty"></div>
          </div>
        </div>


        {/* <DateCountdown
            The time below is when the countdown ends
            dateTo="August 26, 2019 11:20:00 GMT-05:00"
            after the countdown is over, the player is brought to the main page, where they can log in and start playing the game
            callback={() =>
              window.location.replace(
                "https://designory-party-2019-stage.herokuapp.com/#/"
              )
            }
          /> */}

        <div className="DayClass">
        {/* <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" /> */}
          {/* {this.state.isDay1Visible ? <div className="Day1">day1</div> : null}
          {this.state.isDay2Visible ? <div className="Day2">day2</div> : null}
          {this.state.isDay3Visible ? <div className="Day3">day3</div> : null}
          {this.state.isDay4Visible ? <div className="Day4">day4</div> : null}
          {this.state.isDay5Visible ? <div className="Day5">day5</div> : null}
          {this.state.isDay6Visible ? <div className="Day6">day6</div> : null}
          {this.state.isDay7Visible ? <div className="Day7">day7</div> : null}
          {this.state.isDay8Visible ? <div className="Day8">day8</div> : null} */}
        </div>
      </div>
    );
  }
}
