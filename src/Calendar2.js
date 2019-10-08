import React from "react";
import { Component } from "react";
import "./Calendar.scss";
import Day from "./Day";
import DateCountdown from "react-date-countdown-timer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }
  
  onClickDay() {
console.log('clickity')
  }

  render() {
    return (
    <div className="Calendar2">
        <div className="DateCountdown">
          {/* <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" /> */}
        </div>
        <table className="calendar-table">
            <tr className="calendar-table__row">
                <td onClick={this.onClickDay} value={1} className="calendar-table__day calendar-table--red" disabled>1</td>
                <td onClick={this.onClickDay} className="calendar-table__day calendar-table--red">2</td>
                <td onClick={this.onClickDay} className="calendar-table__day calendar-table--red">3</td>
            </tr>
            <tr className="calendar-table__row">
                <td onClick={this.onClickDay} className="calendar-table__day calendar-table--white">4</td>
                <td onClick={this.onClickDay} className="calendar-table__day calendar-table--white">5</td>
                <td onClick={this.onClickDay} className="calendar-table__day calendar-table--white">6</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day calendar-table--red">7</td>
                <td className="calendar-table__day calendar-table--red">8</td>
                <td className="calendar-table__day calendar-table--red">9</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day calendar-table--white">10</td>
                <td className="calendar-table__day calendar-table--white">11</td>
                <td className="calendar-table__day calendar-table--white">12</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day calendar-table--red">13</td>
                <td className="calendar-table__day calendar-table--red">14</td>
                <td className="calendar-table__day calendar-table--red">15</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day calendar-table--white">16</td>
                <td className="calendar-table__day calendar-table--white">17</td>
                <td className="calendar-table__day calendar-table--white">18</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day calendar-table--red">19</td>
                <td className="calendar-table__day calendar-table--red">20</td>
                <td className="calendar-table__day calendar-table--red">21</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day calendar-table--white">22</td>
                <td className="calendar-table__day calendar-table--white">23</td>
                <td className="calendar-table__day calendar-table--white">24</td>
            </tr>
            <tr className="calendar-table__row">
                <td  className="calendar-table__day calendar-table--" colSpan="3">25</td>
            </tr>
        </table>
    </div>
    );
  }
}
