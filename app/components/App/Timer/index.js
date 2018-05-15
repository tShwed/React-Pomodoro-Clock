import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Row, 
    Col
} from 'react-bootstrap';
import * as styles from '../styles';

class Timer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.global}>
                <h4 style={styles.header}>Time Remaining</h4>
                
                <span style={styles.time}>{this.breakStarted? this.props.calculateBreakTime(this.props.breakTime): this.props.calculateTime(this.props.sessionTime)}</span>
                <br />
                <div style={styles.counter}>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <RaisedButton 
                        label="Start" 
                        primary={true}
                        onClick={this.props.handleStart}>
                    </RaisedButton>
                    <RaisedButton 
                        label={this.isPaused ? "Resume" : "Pause"}
                        secondary={true} 
                        onClick={this.props.isPaused ? this.props.handleResume : this.props.handlePause}>
                        </RaisedButton>
                    <RaisedButton 
                        label="Reset" 
                        onClick={this.props.handleReset}
                    ></RaisedButton>
                    </Col>
                <Col md={4}>
                </Col>
                </div>
            </div>
        )
    }
}

export default Timer;