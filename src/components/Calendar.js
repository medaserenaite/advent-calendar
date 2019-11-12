import React from "react";
import { Component } from "react";
import "../styles/Calendar.scss";
import Day from "./Day";
import data from "../data.json";
import About from "./About";

export default class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCalendarVisible: true,
      isAboutVisible: false,
      aboutCounter: 0,
      isQButtonVisible: true,
      today: 0,
      year: 0,
      month: 0,
      day: 0,
      todayIsCorrectDay:'',
    };
    this.aboutClick = this.aboutClick.bind(this);
    
  }

  componentDidMount() {
    var today = new Date();
    this.setState({
      year:today.getFullYear(),
      month:today.getMonth()+1,
      day:today.getDate(),
      today:this.state.today,
    })
  }

  sampleDayClick(x) {
    console.log("click")
    console.log(x)

    //sets: isCalendarVisible: false, isDayVisible: true, isQButtonVisible: false,
    this.sampleFun();
    this.ifCheck(
      this.state.x = x,
      );

  }

  goBack() {
    this.setState({
      isCalendarVisible: true,
      // isDayVisible: false,
      todayIsCorrectDay: false,
      isAboutVisible: false,
      isQButtonVisible: true,
    });
  }

  aboutClick() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: false,
      isAboutVisible: true,
      isQButtonVisible: false
    });
  }

  sampleFun() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      isQButtonVisible: false,
    })
  }

  ifCheck() {
    console.log("x " + this.state.x)
    // this.setState({
    //   value: data.days[this.state.i].id,
    //   name: data.days[this.state.i].name,
    //   text: data.days[this.state.i].text,
    //   icon: data.days[this.state.i].icon,
    // });
    // console.log(this.state.day)
    // console.log("val   " + this.state.value)
    if((this.state.day === 12)) {
      // if((this.state.day === this.state.i)) {
      console.log("whoooo")
      this.setState({
        todayIsCorrectDay: true,
      })
    } else {
      this.setState({
        todayIsCorrectDay: false,
      })
    }
  }


  render() {

    return (
      <div className="Calendar2">

      {/* ---shows snow effect on the whole page--- */}
      <div className="snow" />
      {/* ----------------------------------------- */}

        {this.state.isQButtonVisible ? (
          <button className="AboutButton" onClick={this.aboutClick}>
            ?
          </button>
        ) : null}

        {this.state.isAboutVisible ? (
          <About goBack={this.goBack.bind(this)} />
        ) : null}

        {/* <div className="DateCountdown">
          <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" />
        </div> */}
        {this.state.isCalendarVisible ? (
          <table className="calendar-table">
            <tbody>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(1)} className="calendar-table__day calendar-table--red" id="one">1</td>
              <td onClick={() => this.sampleDayClick(2)} className="calendar-table__day calendar-table--red" id="two">2</td>
              <td onClick={() => this.sampleDayClick(3)} className="calendar-table__day calendar-table--red" id="three">3</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(4)} className="calendar-table__day calendar-table--white">4</td>
              <td onClick={() => this.sampleDayClick(5)} className="calendar-table__day calendar-table--white">5</td>
              <td onClick={() => this.sampleDayClick(6)} className="calendar-table__day calendar-table--white">6</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(7)} className="calendar-table__day calendar-table--red">7</td>
              <td onClick={() => this.sampleDayClick(8)} className="calendar-table__day calendar-table--red">8</td>
              <td onClick={() => this.sampleDayClick(9)} className="calendar-table__day calendar-table--red">9</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(10)} className="calendar-table__day calendar-table--white">10</td>
              <td onClick={() => this.sampleDayClick(11)} className="calendar-table__day calendar-table--white">11</td>
              <td onClick={() => this.sampleDayClick(12)} className="calendar-table__day calendar-table--white">12</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(13)} className="calendar-table__day calendar-table--red">13</td>
              <td onClick={() => this.sampleDayClick(14)} className="calendar-table__day calendar-table--red">14</td>
              <td onClick={() => this.sampleDayClick(15)} className="calendar-table__day calendar-table--red">15</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(16)} className="calendar-table__day calendar-table--white">16</td>
              <td onClick={() => this.sampleDayClick(17)} className="calendar-table__day calendar-table--white">17</td>
              <td onClick={() => this.sampleDayClick(18)} className="calendar-table__day calendar-table--white">18</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(19)} className="calendar-table__day calendar-table--red">19</td>
              <td onClick={() => this.sampleDayClick(20)} className="calendar-table__day calendar-table--red">20</td>
              <td onClick={() => this.sampleDayClick(21)} className="calendar-table__day calendar-table--red">21</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(22)} className="calendar-table__day calendar-table--white">22</td>
              <td onClick={() => this.sampleDayClick(23)} className="calendar-table__day calendar-table--white"> 23 </td>
              <td onClick={() => this.sampleDayClick(24)} className="calendar-table__day calendar-table--white">24</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={() => this.sampleDayClick(25)} className="calendar-table__day calendar-table--red" colSpan="3">25</td>
            </tr>
            </tbody>
          </table>
        ) : null}

        {this.state.todayIsCorrectDay ? (
          <Day
            value={this.state.value}
            name={this.state.name}
            text={this.state.text}
            icon={this.state.icon}
            isDayVisible={this.state.isDayVisible}
            isCalendarVisible={this.state.isCalendarVisible}
            goBack={this.goBack.bind(this)}
          />
        ) : null}      
      </div>
    );
  }
}
