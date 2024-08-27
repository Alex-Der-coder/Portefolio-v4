"use client"
import React, { Component } from "react";
import { Calendar } from "./ui/calendar_ui";

class CalendarDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: new Date().toLocaleDateString()
    };
  }
 

  render() {
    console.log(this.state.currentDate);
    return (
      <div>
        <Calendar
          mode="single"
          selected={this.state.currentDate}
          onSelect={date => this.setState({ currentDate: date })}
          className="rounded-md border"
        />
      </div>
    );
  }
}

export default CalendarDemo;
