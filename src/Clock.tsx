import React, { Component } from 'react';

class Clock extends Component {
  calculateAngle = () => {
    var p1 = {
      x: 20,
      y: 20
    };

    var p2 = {
      x: 40,
      y: 40
    };

    // angle in radians
    var angleRadians = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    console.log(angleRadians);

    // angle in degrees
    var angleDeg = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
    console.log(angleDeg);
  };

  render() {
    let date = new Date();
    return (
      <article className="clock">
        <div className="hours-container">
          <div
            className="hours"
            style={{
              webkitTransform: `rotateZ(${date.getHours()}deg)`,
              transform: `rotateZ(${(date.getHours() % 12) * 32.727}deg)`
            }}
          />
        </div>
        <div className="minutes-container">
          <div className="minutes" />
        </div>
        <div className="seconds-container">
          <div
            className="seconds"
            style={{
              webkitTransform: `rotateZ(${date.getSeconds()}deg)`,
              transform: `rotateZ(${date.getSeconds()}deg)`
            }}
          />
        </div>
      </article>
    );
  }
}

export default Clock;
