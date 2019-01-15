import React, { Component } from 'react';


class Clock extends Component {
    render() {

        let date = new Date;
        return (
            <article className="clock"
            >
                <div className="hours-container">
                    <div className="hours" style={{
                        webkitTransform: `rotateZ(${date.getHours()}deg)`,
                        transform: `rotateZ(${date.getHours()}deg)`
                    }
                    }></div>
                </div>
                <div className="minutes-container">
                    <div className="minutes"></div>
                </div>
                <div className="seconds-container">
                    <div className="seconds"
                    
                    style={{
                        webkitTransform: `rotateZ(${date.getSeconds()}deg)`,
                        transform: `rotateZ(${date.getSeconds()}deg)`
                    }
                    }></div>
                </div>
            </article>
        );
    }
}

export default Clock;