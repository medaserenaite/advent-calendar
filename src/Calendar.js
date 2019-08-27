import React from "react";
import { Component } from "react";
import "./Calendar.scss";
import Day from "./Day";
import DateCountdown from "react-date-countdown-timer";

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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false,
    };
    // this.isCalendarVisible = this.isCalendarVisible.bind(this)
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
    this.day26Click = this.day26Click.bind(this);
    this.day27Click = this.day27Click.bind(this);
    this.day28Click = this.day28Click.bind(this);
    this.day29Click = this.day29Click.bind(this);
    this.day30Click = this.day30Click.bind(this);
    this.day30Click = this.day31Click.bind(this);
  }

  day1Click() {
    console.log("clicked day 1 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day2Click() {
    console.log("clicked day 2 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day3Click() {
    console.log("clicked day 3 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day4Click() {
    console.log("clicked day 4 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day5Click() {
    console.log("clicked day 5 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day6Click() {
    console.log("clicked day 6 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day7Click() {
    console.log("clicked day 7 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: false,
      isDay7Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day8Click() {
    console.log("clicked day 8 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: false,
      isDay7Visible: false,
      isDay8Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day9Click() {
    console.log("clicked day 9 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: false,
      isDay7Visible: false,
      isDay8Visible: false,
      isDay9Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day10Click() 
  {
    console.log("clicked day 10 click");
    this.setState({
      isCalendarVisible: false,
      isDay1Visible: false,
      isDay2Visible: false,
      isDay3Visible: false,
      isDay4Visible: false,
      isDay5Visible: false,
      isDay6Visible: false,
      isDay7Visible: false,
      isDay8Visible: false,
      isDay9Visible: false,
      isDay10Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day11Click() 
  {
    console.log("clicked day 11 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay11Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day12Click() 
  {
    console.log("clicked day 12 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay12Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day13Click() 
  {
    console.log("clicked day 13 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay13Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day14Click() 
  {
    console.log("clicked day 14 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay14Visible: true,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day15Click() 
  {
    console.log("clicked day 15 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay15Visible: true,
      isDay16Visible: false,
      isDay17Visible: false,
      isDay18Visible: false,
      isDay19Visible: false,
      isDay20Visible: false,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day16Click() 
  {
    console.log("clicked day 16 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay16Visible: true,
      isDay17Visible: false,
      isDay18Visible: false,
      isDay19Visible: false,
      isDay20Visible: false,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day17Click() 
  {
    console.log("clicked day 17 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay17Visible: true,
      isDay18Visible: false,
      isDay19Visible: false,
      isDay20Visible: false,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day18Click() 
  {
    console.log("clicked day 18 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay18Visible: true,
      isDay19Visible: false,
      isDay20Visible: false,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day19Click() 
  {
    console.log("clicked day 19 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay19Visible: true,
      isDay20Visible: false,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day20Click() 
  {
    console.log("clicked day 20 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay20Visible: true,
      isDay21Visible: false,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day21Click() 
  {
    console.log("clicked day 21 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay21Visible: true,
      isDay22Visible: false,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day22Click() 
  {
    console.log("clicked day 22 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay22Visible: true,
      isDay23Visible: false,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day23Click() 
  {
    console.log("clicked day 23 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay23Visible: true,
      isDay24Visible: false,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day24Click() 
  {
    console.log("clicked day 24 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay24Visible: true,
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day25Click() 
  {
    console.log("clicked day 25 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: true,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day26Click() 
  {
    console.log("clicked day 26 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: false,
      isDay26Visible: true,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day27Click() 
  {
    console.log("clicked day 27 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: true,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day28Click() 
  {
    console.log("clicked day 28 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: true,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day29Click() 
  {
    console.log("clicked day 29 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: true,
      isDay30Visible: false,
      isDay31Visible: false
    });
  }
  day30Click() 
  {
    console.log("clicked day 30 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: true,
      isDay31Visible: false
    });
  }
  day31Click() 
  {
    console.log("clicked day 31 click");
    this.setState({
      isCalendarVisible: false,
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: true
    });
  }

  goBack() {
    this.setState({
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
      isDay25Visible: false,
      isDay26Visible: false,
      isDay27Visible: false,
      isDay28Visible: false,
      isDay29Visible: false,
      isDay30Visible: false,
      isDay31Visible: false
    })
  }

  render() {
    return (
      <div className="CalendarDiv">
        <div className="DateCountdown">
          {/* <DateCountdown dateTo="December 1, 2019 00:00:00 GMT-05:00" /> */}
        </div>
        {/* {this.state.isCalendarVisible ? (
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
        ) : null} */}
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
          {/* {this.state.isDay1Visible ? (
            <div className="Day1 post">
              <h3 className="DayHeading">Day1</h3>
              <div className="image">
                <img></img><br/>
              </div>
              <div className="postAbout">post</div>
              <button className="backButton" onClick={this.goBack.bind(this)}>back</button>
            </div>
          ) : null} */}


          {/* {this.state.isDay2Visible ? (
            <div className="Day2 post">
              <DateCountdown dateTo="December 2, 2019 00:00:00 GMT-05:00" />
              <h3 className="DayHeading">Day2</h3>
              <div className="image">
                <img></img><br/>
              </div>
              <div className="postAbout">post</div>
              <button className="backButton" onClick={this.goBack.bind(this)}>back</button>
            </div>
          ) : null}
          {this.state.isDay3Visible ? (
            <div className="Day3 post">
              <DateCountdown dateTo="December 3, 2019 00:00:00 GMT-05:00" />
              <h3 className="DayHeading">Day3</h3>
              <div className="image">
                <img></img><br/>
              </div>
              <div className="postAbout">post</div>
              <button className="backButton" onClick={this.goBack.bind(this)}>back</button>
            </div>
          ) : null}
          {this.state.isDay4Visible ? (
            <div className="Day4 post">
              <DateCountdown dateTo="December 4, 2019 00:00:00 GMT-05:00" />
              <h3 className="DayHeading">Day4</h3>
              <div className="image">
                <img></img><br/>
              </div>
              <div className="postAbout">post</div>
              <button className="backButton" onClick={this.goBack.bind(this)}>back</button>
            </div>
          ) : null}
          {this.state.isDay5Visible ? (
            <div className="Day5 post">
              <DateCountdown dateTo="December 5, 2019 00:00:00 GMT-05:00" />
            </div>
          ) : null}
          {this.state.isDay6Visible ? (
            <div className="Day6 post">
              <DateCountdown dateTo="December 6, 2019 00:00:00 GMT-05:00" />
            </div>
          ) : null}
          {this.state.isDay7Visible ? (
            <div className="Day7 post">
              <DateCountdown dateTo="December 7, 2019 00:00:00 GMT-05:00" />
            </div>
          ) : null}
          {this.state.isDay8Visible ? (
            <div className="Day8 post">
              <DateCountdown dateTo="December 8, 2019 00:00:00 GMT-05:00" />
            </div>
          ) : null} */}
        </div>
      </div>
    );
  }
}
