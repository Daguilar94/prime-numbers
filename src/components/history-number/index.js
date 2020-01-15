import React from 'react';
import { Paper } from '@material-ui/core';
import './styles.scss';

const HistoryNumber = ({ number }) => ( 
    <Paper className="history__number">
        <span>{number}</span>
    </Paper>
);

 
export default HistoryNumber;