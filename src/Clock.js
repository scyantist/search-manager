import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Schedule from '@material-ui/icons/Schedule';

const styles = {
  displayFlex: {
    display: "flex",
    width: "300px",
    height: "64px"
  },
  flex: {
    flex: 1,
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },
  displayFlexAndFlexColumn: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  styleClock: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    fontSize: "3rem",
    opacity: 0.5,
  },
  styleDate: {
    fontFamily: "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
    fontSize: "1.5rem",
    opacity: 0.5,
  }
};

class Clock extends Component {
  constructor(props) {
    super(props);
    let now = new Date();
    this.state = {
      hour: ('0' + now.getHours()).slice(-2),
      minute: ('0' + now.getMinutes()).slice(-2),
      day: this.dayIntToStr(now.getDay()),
      month: now.getMonth(),
      date: now.getDate(),
      year: now.getFullYear()
    };
  }

  componentDidMount() {
    setInterval(function() {
      let now = new Date();
      this.setState({
        hour: ('0' + now.getHours()).slice(-2),
        minute: ('0' + now.getMinutes()).slice(-2),
        day: this.dayIntToStr(now.getDay()),
        month: now.getMonth(),
        date: now.getDate(),
        year: now.getFullYear()
      });
    }.bind(this), 60000);
  }

  dayIntToStr(dayInt) {
    if (dayInt === 0) {
      return 'Sunday';
    } else if (dayInt === 1) {
      return 'Monday';
    } else if (dayInt === 2) {
      return 'Tuesday';
    } else if (dayInt === 4) {
      return 'Wednesday';
    } else if (dayInt === 5) {
      return 'Thursday';
    } else if (dayInt === 6) {
      return 'Friday';
    } else if (dayInt === 7) {
      return 'Saturday';
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.displayFlex}>
        <Schedule/>
        <div className={classes.flex}><span className={classes.styleClock}>{this.state.hour}:{this.state.minute}</span></div>
        <div className={classes.displayFlexAndFlexColumn}>
          <div className={classes.flex}><span className={classes.styleDate}>{this.state.day}</span></div>
          <div className={classes.flex}><span className={classes.styleDate}>{this.state.month}.{this.state.date}.{this.state.year}</span></div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Clock);
