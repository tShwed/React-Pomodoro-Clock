import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import * as styles from '../styles';

class Break extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
        <div style={styles.global}>
            <h4 style={styles.header}>Break Length</h4>
            <div style={styles.counter}>
                <FloatingActionButton 
                    mini={true}
                    secondary={true}
                    onClick={this.props.subtractBreakTime}>
                    <ContentRemove />
                </FloatingActionButton>
                    <span>{this.props.calculateTime(this.props.breakTime)}</span>
                <FloatingActionButton
                    mini={true}
                    primary={true}
                    onClick={this.props.addBreakTime}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        </div>
        );
    }
}

export default Break; 