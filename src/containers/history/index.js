import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    setHistoryVisibility,
    clearHistory
} from '../../redux/actions/history';
import HistoryNumber from '../../components/history-number';
import { Button } from '@material-ui/core';
import './styles.scss';

const History = ({ primes, notPrimes, visible, setHistoryVisibility }) => (
    <section className={`history ${visible ? "history--visible" : ""}`}>
        <Button
            variant="outlined"
            color="primary"
            className="history__toggle"
            onClick={setHistoryVisibility}
        >
            History
        </Button>
        <div className="history__section primes">
            <h2 className="history__title">Primes</h2>
            <div className="history__numbers">
                {primes.map((num, index) => <HistoryNumber key={index} number={num} />)}
            </div>
        </div>
        <div className="history__section not-primes">
            <h2 className="history__title">Not primes</h2>
            <div className="history__numbers">
                {notPrimes.map((num, index) => <HistoryNumber key={index} number={num} />)}
            </div>
        </div>
    </section>
);

const mapStateToProps = ({ history }) => ({
    primes: history.primes,
    notPrimes: history.notPrimes,
    visible: history.visible
})

const  mapDispatchToProps = (dispatch) => ({
    setHistoryVisibility: () => dispatch(setHistoryVisibility()),
    clearHistory: () => dispatch(clearHistory())
})

History.propTypes = {
    primes: PropTypes.array.isRequired,
    notPrimes: PropTypes.array.isRequired,
    visible: PropTypes.bool.isRequired,
    setHistoryVisibility: PropTypes.func.isRequired,
    clearHistory: PropTypes.func.isRequired
}

History.defaultProps = {
    isPrime: null
}

export default connect(mapStateToProps, mapDispatchToProps)(History);