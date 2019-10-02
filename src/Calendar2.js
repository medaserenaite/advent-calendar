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

  goBack() {
    this.setState({

    })
  }

  render() {
    return (
    <div className="Calendar2">
        <div className="DateCountdown">
          <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" />
        </div>
        <table className="calendar-table">
            <tr className="calendar-table__row">
                <td className="calendar-table__day">1</td>
                <td className="calendar-table__day">2</td>
                <td className="calendar-table__day">3</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">4</td>
                <td className="calendar-table__day">5</td>
                <td className="calendar-table__day">6</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">7</td>
                <td className="calendar-table__day">8</td>
                <td className="calendar-table__day">9</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">10</td>
                <td className="calendar-table__day">11</td>
                <td className="calendar-table__day">12</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">13</td>
                <td className="calendar-table__day">14</td>
                <td className="calendar-table__day">15</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">16</td>
                <td className="calendar-table__day">17</td>
                <td className="calendar-table__day">18</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">19</td>
                <td className="calendar-table__day">20</td>
                <td className="calendar-table__day">21</td>
            </tr>
            <tr className="calendar-table__row">
                <td className="calendar-table__day">22</td>
                <td className="calendar-table__day">23</td>
                <td className="calendar-table__day">24</td>
            </tr>
            <tr className="calendar-table__row">
                <td  className="calendar-table__day" colSpan="3">25</td>
            </tr>
        </table>
    </div>
    );
  }
}
