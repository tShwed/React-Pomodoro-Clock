import React from 'react';


class Session extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div>
            <h4>Session Length</h4>
            <button onClick={this.props.subtractSessionTime}>-</button>
                <span>{this.props.calculateTime(this.props.sessionTime)}</span>
            <button onClick={this.props.addSessionTime}>+</button>
        </div>
        );
    }
}

export default Session;