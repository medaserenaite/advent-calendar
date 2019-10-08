import React from "react";
import { Component } from "react";
import "./Calendar.scss";
import Day from "./Day";
import DateCountdown from "react-date-countdown-timer";
import data from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: true,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: false,
      isDay7Visible: false,
      isDay8Visible: false,
      isDay9Visible: false,
      isDay10Visible: false,
      isDay11Visible: false,
      isDay12Visible: false,
      isDay13Visible: false,
      isDay14Visible: false,
      isDay15Visible: false,
      isDay16Visible: false,
      isDay17Visible: false,
      isDay18Visible: false,
      isDay19Visible: false,
      isDay20Visible: false,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false
    };
    this.day1Click = this.day1Click.bind(this);
    this.day2Click = this.day2Click.bind(this);
    this.day3Click = this.day3Click.bind(this);
    this.day4Click = this.day4Click.bind(this);
    this.day5Click = this.day5Click.bind(this);
    this.day6Click = this.day6Click.bind(this);
    this.day7Click = this.day7Click.bind(this);
    this.day8Click = this.day8Click.bind(this);
    this.day9Click = this.day9Click.bind(this);
    this.day10Click = this.day10Click.bind(this);
    this.day11Click = this.day11Click.bind(this);
    this.day12Click = this.day12Click.bind(this);
    this.day13Click = this.day13Click.bind(this);
    this.day14Click = this.day14Click.bind(this);
    this.day15Click = this.day15Click.bind(this);
    this.day16Click = this.day16Click.bind(this);
    this.day17Click = this.day17Click.bind(this);
    this.day18Click = this.day18Click.bind(this);
    this.day19Click = this.day19Click.bind(this);
    this.day20Click = this.day20Click.bind(this);
    this.day21Click = this.day21Click.bind(this);
    this.day22Click = this.day22Click.bind(this);
    this.day23Click = this.day23Click.bind(this);
    this.day24Click = this.day24Click.bind(this);
    this.day25Click = this.day25Click.bind(this);
  }

  componentDidMount() {
    //   console.log(data.days[0].name)
  }

  day1Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 1
    });
  }
  day2Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 2
    });
  }
  day3Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 3
    });
  }
  day4Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 4
    });
  }
  day5Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 5
    });
  }
  day6Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 6
    });
  }
  day7Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 7
    });
  }
  day8Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 8
    });
  }
  day9Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 9
    });
  }
  day10Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 10
    });
  }
  day11Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 11
    });
  }
  day12Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 12
    });
  }
  day13Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 13
    });
  }
  day14Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 14
    });
  }
  day15Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 15
    });
  }
  day16Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 16
    });
  }
  day17Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 17
    });
  }
  day18Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 18
    });
  }
  day19Click() {
    console.log("clicked day 19 click");
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 19
    });
  }
  day20Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 20
    });
  }
  day21Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 21
    });
  }
  day22Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 22
    });
  }
  day23Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 23
    });
  }
  day24Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 24
    });
  }
  day25Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: 25
    });
  }

  goBack() {
    this.setState({
      isCalendarVisible: true,
      isDayVisible: false,
    })
  }


  render() {
    return (
      <div className="Calendar2">
        <div className="DateCountdown">
          {/* <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" /> */}
        </div>
        {this.state.isCalendarVisible ? (
          <table className="calendar-table">
            <tr className="calendar-table__row">
              <td
                onClick={this.day1Click}
                className="calendar-table__day calendar-table--red"
                value={1}
              >
                1
              </td>
              <td
                onClick={this.day2Click}
                className="calendar-table__day calendar-table--red"
                value={2}
              >
                2
              </td>
              <td
                onClick={this.day3Click}
                className="calendar-table__day calendar-table--red"
                value={3}
              >
                3
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day4Click}
                className="calendar-table__day calendar-table--white"
                value={4}
              >
                4
              </td>
              <td
              onClick={this.day5Click}
                className="calendar-table__day calendar-table--white"
                value={5}
              >
                5
              </td>
              <td
              onClick={this.day6Click}
                className="calendar-table__day calendar-table--white"
                value={6}
              >
                6
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day7Click} className="calendar-table__day calendar-table--red" value={7}>
                7
              </td>
              <td onClick={this.day8Click} className="calendar-table__day calendar-table--red" value={8}>
                8
              </td>
              <td onClick={this.day9Click} className="calendar-table__day calendar-table--red" value={9}>
                9
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day10Click}
                className="calendar-table__day calendar-table--white"
                value={10}
              >
                10
              </td>
              <td
              onClick={this.day11Click}
                className="calendar-table__day calendar-table--white"
                value={11}
              >
                11
              </td>
              <td
              onClick={this.day12Click}
                className="calendar-table__day calendar-table--white"
                value={12}
              >
                12
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day13Click}
                className="calendar-table__day calendar-table--red"
                value={13}
              >
                13
              </td>
              <td
              onClick={this.day14Click}
                className="calendar-table__day calendar-table--red"
                value={14}
              >
                14
              </td>
              <td
              onClick={this.day15Click}
                className="calendar-table__day calendar-table--red"
                value={15}
              >
                15
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day16Click}
                className="calendar-table__day calendar-table--white"
                value={16}
              >
                16
              </td>
              <td
              onClick={this.day17Click}
                className="calendar-table__day calendar-table--white"
                value={17}
              >
                17
              </td>
              <td
              onClick={this.day18Click}
                className="calendar-table__day calendar-table--white"
                value={18}
              >
                18
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day19Click}
                className="calendar-table__day calendar-table--red"
                value={19}
              >
                19
              </td>
              <td
              onClick={this.day20Click}
                className="calendar-table__day calendar-table--red"
                value={20}
              >
                20
              </td>
              <td
              onClick={this.day21Click}
                className="calendar-table__day calendar-table--red"
                value={21}
              >
                21
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day22Click}
                className="calendar-table__day calendar-table--white"
                value={22}
              >
                22
              </td>
              <td
              onClick={this.day23Click}
                className="calendar-table__day calendar-table--white"
                value={23}
              >
                23
              </td>
              <td
              onClick={this.day24Click}
                className="calendar-table__day calendar-table--white"
                value={24}
              >
                24
              </td>
            </tr>
            <tr className="calendar-table__row">
              <td
              onClick={this.day25Click}
                className="calendar-table__day calendar-table--"
                colSpan="3"
                value={25}
              >
                25
              </td>
            </tr>
          </table>
        ) : null}

        {this.state.isDayVisible ? (
          //   <div className="Day1 post">
          //     <h3 className="DayHeading">Day1</h3>
          //     <div className="image">
          //       <img></img>
          //       <br />
          //     </div>
          //     <div className="postAbout">post</div>
          //     {/* <button className="backButton" onClick={this.goBack.bind(this)}>back</button> */}
          //   </div>
        //    <button className="backButton" onClick={this.goBack.bind(this)}>back</button>
          <Day 
          value={this.state.value}
          isDayVisible={this.state.isDayVisible}
          isCalendarVisible={this.state.isCalendarVisible}
          goBack={this.goBack.bind(this)}
          />

         

        ) : null}
      </div>
    );
  }
}
