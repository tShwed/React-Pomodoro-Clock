import React from 'react';

class Timer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h4>Time Remaining</h4>
                
                <span>{this.breakStarted? this.props.calculateBreakTime(this.props.breakTime): this.props.calculateTime(this.props.sessionTime)}</span>
                <button onClick={this.props.handleStart}>Start</button>
                <button onClick={this.props.isPaused ? this.props.handleResume : this.props.handlePause}>{this.isPaused ? "Resume" : "Pause"}</button>
                <button onClick={this.props.handleReset}>Reset</button>
            </div>
        )
    }
}

export default Timer;