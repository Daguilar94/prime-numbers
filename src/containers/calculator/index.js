import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateNumberValue, submitForm } from '../../redux/actions/calculator';
import { Icon, Fab, TextField } from '@material-ui/core';
import PrimeAlert from '../../components/prime-alert/index.js';
import './styles.scss';

const Calculator = ({ number, isValid, isPrime, errorMessage, updateNumberValue, submitForm }) => {
    const submitted = typeof(isPrime) === "boolean";
    return (
        <section className="calculator">
            <form onSubmit={(e) => submitForm(e)} className="calculator__form">
                <TextField
                    disabled={submitted}
                    error={!isValid}
                    helperText={errorMessage}
                    label="Enter a number"
                    onChange={({ target: { value } }) => updateNumberValue(value)}
                    variant="outlined"
                    value={number}
                    size="small"
                />
                <Fab
                    color="primary"
                    type="submit"
                    disabled={!isValid || !number}
                    className="search"
                >
                    {submitted ? <Icon>refresh</Icon> : <Icon>search</Icon>}
                </Fab>
            </form>
            {submitted && <PrimeAlert isPrime={isPrime} />}
        </section>
    );
};

const mapStateToProps = ({ calculator }) => ({
    number: calculator.number,
    isValid: calculator.isValid,
    isPrime: calculator.isPrime,
    errorMessage: calculator.errorMessage
})

const  mapDispatchToProps = (dispatch) => ({
    updateNumberValue: args => dispatch(updateNumberValue(args)),
    submitForm: args => dispatch(submitForm(args))
})

Calculator.propTypes = {
    number: PropTypes.string.isRequired,
    isValid: PropTypes.bool.isRequired,
    isPrime: PropTypes.oneOf([true, false, null]),
    errorMessage: PropTypes.string.isRequired,
    updateNumberValue: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired
}

Calculator.defaultProps = {
    isPrime: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);