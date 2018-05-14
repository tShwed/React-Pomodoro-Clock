import React from 'react'; 
import ReactDOM from 'react-dom';
import Textfield from 'material-ui/Textfield';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Styles
import '../../styles/global.scss';
import {
    Row, 
    Col
} from 'react-bootstrap';

//Components 
import Header from './Header';
import Break from './Break';
import Session from './Session';
import Timer from './Timer';

class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = { 
            breakTime: 300,
            time: 1500,
        }

        this.pomodoroStarted = false;
        this.breakStarted = false;
        this.isPaused = false;
        
        //functions
        this.addBreakTime = this.addBreakTime.bind(this);
        this.subtractBreakTime = this.subtractBreakTime.bind(this);
        this.addSessionTime = this.addSessionTime.bind(this);
        this.subtractSessionTime = this.subtractSessionTime.bind(this);

        this.handleStart = this.handleStart.bind(this); 
        this.handlePause = this.handlePause.bind(this); 
        this.handleResume = this.handleResume.bind(this); 
        this.handleReset = this.handleReset.bind(this); 

        this.stopTimer = this.stopTimer.bind(this); 
        this.startBreak = this.startBreak.bind(this);

        this.calculateTime = this.calculateTime.bind(this);
        this.calculateBreakTime = this.calculateBreakTime.bind(this);

        this.componentDidUpdate = this.componentDidUpdate.bind(this);
    }

    //Counter changers
    addBreakTime(breakTime) {
        if (!this.pomodoroStarted) {
            this.breakTime = this.breakTime + 60;
            this.setState({ breakTime: this.state.breakTime + 60 });
          }
    }
    subtractBreakTime(breakTime) {
        if(this.breakTime > 60) {
            this.breakTime = this.breakTime - 60;
          }
          if (this.state.breakTime > 60 && !this.pomodoroStarted) {
            this.setState({ breakTime: this.state.breakTime - 60 });
          }
    }

    addSessionTime(time) {
        if (!this.pomodoroStarted) {
            this.setState({ time: this.state.time + 60 });
          }
    }

    subtractSessionTime(time) {
        if (this.state.time > 60 && !this.pomodoroStarted) {
            this.setState({ time: this.state.time - 60 });
          }
    }

//start/pause functions
    handleStart(){
        if (!this.pomodoroStarted) {
          this.timer = setInterval(() => {
            this.setState({ time: this.state.time - 1 });
          }, 1000);
          this.pomodoroStarted = !this.pomodoroStarted;
        }
    
        if (!this.time) {
          this.time = this.state.time;
          this.breakTime = this.state.breakTime;
        }
      };

      handlePause(){
        if (this.pomodoroStarted) {
          this.isPaused = true;
          this.setState(this.state);
          if (!this.breakStarted) {
            this.stopTimer(this.timer);
          }
    
          if (this.breakStarted) {
            this.stopTimer(this.breakTimer);
          }
        }
      };
    
    stopTimer(timer) {
        clearInterval(timer);
        timer = null;
      };

    handleResume(){
        if (this.pomodoroStarted) {
          this.setState(this.state);
          this.isPaused = false;
    
          if (!this.breakStarted) {
            this.timer = setInterval(() => {
              this.setState({ time: this.state.time - 1 });
            }, 1000);
          }
    
          if (this.breakStarted) {
            this.breakTimer = setInterval(() => {
              this.setState({ breakTime: this.state.breakTime - 1 });
            }, 1000);
          }
        }
      };

    

      //reset

    handleReset(){
        this.setState({
          time: 1500,
          breakTime: 300
        });
        this.stopTimer(this.timer);
        this.pomodoroStarted = false;
        this.stopTimer(this.breakTimer);
        this.breakStarted = false;
        this.isPaused = false;
      };

    //Converts state to time

    calculateTime(time) {
        return `${Math.floor(time / 60)}:${time % 60 > 9 ? "" + time % 60 : "0" + time % 60}`;
      };

    calculateBreakTime(breakTime) {
        return `${Math.floor(breakTime / 60)}:${breakTime % 60 > 9 ? "" + breakTime % 60 : "0" + breakTime % 60}`;
      };
    //Changing component between session and break
    componentDidUpdate() {
        if (this.state.time < 1) {
          this.stopTimer(this.timer);
          //After the Pomodoro timer ends, set the time to the stored value set by the user
          this.setState({ time: this.time });
          if (!this.breakStarted) {
            this.startBreak();
            this.breakStarted = true;
          }
        }
    
        if (this.state.breakTime < 1) {
          this.stopTimer(this.breakTimer);
          //After the break timer ends, set the time to the stored value set by the user
          this.setState({ breakTime: this.breakTime });
          this.pomodoroStarted = false;
          this.breakStarted = false;
          this.handleStart();
        }
      }
      startBreak() {
        this.breakTimer = setInterval(() => {
          this.setState({ breakTime: this.state.breakTime - 1 });
        }, 1000);
      }
    
    //Changing from Session to Break

    render() { 
        return (
            <MuiThemeProvider>
                <div>
                    <Header />
                    <Break 
                        breakTime={this.state.breakTime} 
                        addBreakTime={this.addBreakTime} 
                        subtractBreakTime={this.subtractBreakTime} 
                        calculateTime={this.calculateBreakTime}
                        />
                    <Session 
                        sessionTime={this.state.time} 
                        addSessionTime={this.addSessionTime} 
                        subtractSessionTime={this.subtractSessionTime}
                        calculateTime={this.calculateTime} 
                        />
                    <Timer 
                        //state
                        breakTime={this.state.breakTime} 
                        sessionTime={this.state.time}
                        pomodoroStarted={this.pomodoroStarted}
                        breakStarted={this.breakStarted}
                        isPaused={this.isPaused}
                        //functions
                        handleStart={this.handleStart}
                        handlePause={this.handlePause}
                        handleReset={this.handleReset}
                        handleResume={this.handleResume}
                        calculateTime={this.calculateTime}
                        calculateBreakTime={this.calculateBreakTime}
                        />
                
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App; 
