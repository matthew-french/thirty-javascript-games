import React from 'react';
import './clock.css';


class Clock extends React.Component {
  constructor() {
    super();
    this.setDegrees = this.setDegrees.bind(this);
  }

  // getinitialstate
  state = {
    degrees: {
      seconds : 0,
      minutes: 0,
      hours: 0,
    }
  };

  componentDidMount() {
      this.setDegrees();
  }

  setDegrees() {
    const degrees = {...this.state.degrees};

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const mins = now.getMinutes();
    const minutesDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;

    degrees['seconds'] = secondsDegrees;
    degrees['minutes'] = minutesDegrees;
    degrees['hours'] = hourDegrees;

    this.setState({ degrees });

    setInterval(this.setDegrees, 1000);
  }

  render() {
    const secondsHandStyle = {transform:`rotate(${this.state.degrees.seconds}deg)`};
    const minutesHandStyle = {transform:`rotate(${this.state.degrees.minutes}deg)`};
    const hoursHandStyle = {transform:`rotate(${this.state.degrees.hours}deg)`};

    return(
      <div className="clock">
        <div className="clock-face">
          <div style={secondsHandStyle} className="hand hour-hand"></div>
          <div style={minutesHandStyle} className="hand min-hand"></div>
          <div style={hoursHandStyle} className="hand second-hand"></div>
        </div>
      </div>
    )
  }
}

export default Clock;
