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

  day1Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: false,
      value: data.days[0].id,
      name: data.days[0].name,
      text: data.days[0].text,
      icon: data.days[0].icon,
      isQButtonVisible: false,
      // today: this.state.today,
      // year: this.state.year,
      // month: this.state.month,
      // day: this.state.day,
      // todayIsCorrectDay: this.state.todayIsCorrectDay,
    });
    if((this.state.year >= 2019) && (this.state.month >= 11) && (this.state.day >= 11)) {
      console.log(true)
      this.setState({
        todayIsCorrectDay: true,
      })
    } else {
      // console.log(false)
      // console.log(true)
      this.setState({
        todayIsCorrectDay: false,
      })
    }

      // console.log("!!!  " + this.state.todayIsCorrectDay)
  }
  day2Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[1].id,
      name: data.days[1].name,
      text: data.days[1].text,
      icon: data.days[1].icon,
      isQButtonVisible: false,
    });
    if((this.state.year >= 2019) && (this.state.month >= 11) && (this.state.day >= 11)) {
      console.log(true)
      this.setState({
        todayIsCorrectDay: true,
      })
    } else {
      this.setState({
        todayIsCorrectDay: false,
      })
    }

  }
  day3Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[2].id,
      name: data.days[2].name,
      text: data.days[2].text,
      icon: data.days[2].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 3)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day4Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[3].id,
      name: data.days[3].name,
      text: data.days[3].text,
      icon: data.days[3].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 4)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day5Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[4].id,
      name: data.days[4].name,
      text: data.days[4].text,
      icon: data.days[4].icon,
      isQButtonVisible: false
    });
        if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 5)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day6Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[5].id,
      name: data.days[5].name,
      text: data.days[5].text,
      icon: data.days[5].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 6)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day7Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[6].id,
      name: data.days[6].name,
      text: data.days[6].text,
      icon: data.days[6].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 7)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day8Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[7].id,
      name: data.days[7].name,
      text: data.days[7].text,
      icon: data.days[7].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 8)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day9Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[8].id,
      name: data.days[8].name,
      text: data.days[8].text,
      icon: data.days[8].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 9)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day10Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[9].id,
      name: data.days[9].name,
      text: data.days[9].text,
      icon: data.days[9].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 10)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day11Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[10].id,
      name: data.days[10].name,
      text: data.days[10].text,
      icon: data.days[10].icon,
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 11)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day12Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[11].id,
      name: data.days[11].name,
      text: data.days[11].text,
      icon: data.days[11].icon,    
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 12)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day13Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[12].id,
      name: data.days[12].name,
      text: data.days[12].text,
      icon: data.days[12].icon,
      isQButtonVisible: false    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 13)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day14Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[13].id,
      name: data.days[13].name,
      text: data.days[13].text,
      icon: data.days[13].icon,
      isQButtonVisible: false    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 14)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day15Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[14].id,
      name: data.days[14].name,
      text: data.days[14].text,
      icon: data.days[14].icon,
      isQButtonVisible: false    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 15)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day16Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[15].id,
      name: data.days[15].name,
      text: data.days[15].text,
      icon: data.days[15].icon,
      isQButtonVisible: false    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 16)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day17Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[16].id,
      name: data.days[16].name,
      text: data.days[16].text,
      icon: data.days[16].icon    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 17)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day18Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[17].id,
      name: data.days[17].name,
      text: data.days[17].text,
      icon: data.days[17].icon,
      isQButtonVisible: false    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 18)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day19Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[18].id,
      name: data.days[18].name,
      text: data.days[18].text,
      icon: data.days[18].icon,
      isQButtonVisible: false    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 19)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day20Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[19].id,
      name: data.days[19].name,
      text: data.days[19].text,
      icon: data.days[19].icon,
      isQButtonVisible: false
    });
        if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 20)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day21Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[20].id,
      name: data.days[20].name,
      text: data.days[20].text,
      icon: data.days[20].icon,    
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 21)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day22Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[21].id,
      name: data.days[21].name,
      text: data.days[21].text,
      icon: data.days[21].icon    
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 22)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day23Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[22].id,
      name: data.days[22].name,
      text: data.days[22].text,
      icon: data.days[22].icon,  
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 23)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day24Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[23].id,
      name: data.days[23].name,
      text: data.days[23].text,
      icon: data.days[23].icon,  
      isQButtonVisible: false
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 24)) {
      console.log(true)
    } else {
      console.log(false)
    }

  }
  day25Click() {
    this.setState({
      isCalendarVisible: false,
      isDayVisible: true,
      value: data.days[24].id,
      name: data.days[24].name,
      text: data.days[24].text,
      icon: data.days[24].icon,
      isQButtonVisible: false,
    });
    if((this.state.year === 2019) && (this.state.month === 12) && (this.state.day === 25)) {
      console.log(true)
    } else {
      console.log(false)
    }
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

  render() {
    return (
      <div className="Calendar2">
        <div className="snow" />
        {this.state.isQButtonVisible ? (
          <button className="AboutButton" onClick={this.aboutClick}>
            ?
          </button>
        ) : null}

        {this.state.isAboutVisible ? (
          <About goBack={this.goBack.bind(this)} />
        ) : null}

        <div className="DateCountdown">
          {/* <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" /> */}
        </div>
        {this.state.isCalendarVisible ? (
          <table className="calendar-table">
            <tbody>
            <tr className="calendar-table__row">
              <td onClick={this.day1Click} className="calendar-table__day calendar-table--red" id="one">1</td>
              <td onClick={this.day2Click} className="calendar-table__day calendar-table--red" id="two">2</td>
              <td onClick={this.day3Click} className="calendar-table__day calendar-table--red" id="three">3</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day4Click} className="calendar-table__day calendar-table--white">4</td>
              <td onClick={this.day5Click} className="calendar-table__day calendar-table--white">5</td>
              <td onClick={this.day6Click} className="calendar-table__day calendar-table--white">6</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day7Click} className="calendar-table__day calendar-table--red">7</td>
              <td onClick={this.day8Click} className="calendar-table__day calendar-table--red">8</td>
              <td onClick={this.day9Click} className="calendar-table__day calendar-table--red">9</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day10Click} className="calendar-table__day calendar-table--white">10</td>
              <td onClick={this.day11Click} className="calendar-table__day calendar-table--white">11</td>
              <td onClick={this.day12Click} className="calendar-table__day calendar-table--white">12</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day13Click} className="calendar-table__day calendar-table--red">13</td>
              <td onClick={this.day14Click} className="calendar-table__day calendar-table--red">14</td>
              <td onClick={this.day15Click} className="calendar-table__day calendar-table--red">15</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day16Click} className="calendar-table__day calendar-table--white">16</td>
              <td onClick={this.day17Click} className="calendar-table__day calendar-table--white">17</td>
              <td onClick={this.day18Click} className="calendar-table__day calendar-table--white">18</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day19Click} className="calendar-table__day calendar-table--red">19</td>
              <td onClick={this.day20Click} className="calendar-table__day calendar-table--red">20</td>
              <td onClick={this.day21Click} className="calendar-table__day calendar-table--red">21</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day22Click} className="calendar-table__day calendar-table--white">22</td>
              <td onClick={this.day23Click} className="calendar-table__day calendar-table--white"> 23 </td>
              <td onClick={this.day24Click} className="calendar-table__day calendar-table--white">24</td>
            </tr>
            <tr className="calendar-table__row">
              <td onClick={this.day25Click} className="calendar-table__day calendar-table--red" colSpan="3">25</td>
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
