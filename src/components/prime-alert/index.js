import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@material-ui/core';
import './styles.scss';

export default function PrimeAlert({ isPrime }) {
    const alertInfo = {
        icon: isPrime ? 'check' : 'close',
        text: isPrime ? 'Is prime' : 'Is not prime'
    }

    return (
        <div className="prime-alert">
            <Icon
                color="primary"
                className="prime-alert__icon"
            >
                {alertInfo.icon}
            </Icon>
            <span>{alertInfo.text}</span>
        </div>
    )
}

PrimeAlert.propTypes = {
    isPrime: PropTypes.oneOf([true, false, null]),
}

PrimeAlert.defaultProps = {
    isPrime: null
}