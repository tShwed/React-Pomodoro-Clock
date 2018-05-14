import React from 'react';

class Break extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
        <div>
            <h4>Break Length</h4>
            <button onClick={this.props.subtractBreakTime}>-</button>
                <span>{this.props.calculateTime(this.props.breakTime)}</span>
            <button onClick={this.props.addBreakTime}>+</button>
        </div>
        );
    }
}

export default Break; 