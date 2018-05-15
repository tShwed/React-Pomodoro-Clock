import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import * as styles from '../styles';

class Session extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
        <div style={styles.global}>
            <h4 style={styles.header}>Session Length</h4>
            <div style={styles.floatingbutton}>
            <FloatingActionButton 
                mini={true} 
                secondary={true} 
                onClick={this.props.subtractSessionTime}>
                <ContentRemove />
            </FloatingActionButton>

            <span>{this.props.calculateTime(this.props.sessionTime)}</span>

            <FloatingActionButton 
                mini={true}
                primary={true} 
                onClick={this.props.addSessionTime}>
                <ContentAdd />
            </FloatingActionButton>
            </div>
        </div>
        );
    }
}

export default Session;