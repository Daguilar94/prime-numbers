import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '@material-ui/core';
import './styles.scss';

const HistoryNumber = ({ number }) => (
    <Paper className="history__number">
        <span>{number}</span>
    </Paper>
);

HistoryNumber.propTypes = {
    number: PropTypes.string.isRequired
}

export default HistoryNumber;