import React from 'react';
import * as styles from '../styles';


class Header extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <h2 style={styles.header}>My Pomodoro Clock</h2>
        );
    }
}

export default Header; 