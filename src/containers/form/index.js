import React from 'react';
import { connect } from 'react-redux';
import { updateNumberValue, submitForm } from '../../redux/actions/form';
import { Button, TextField } from '@material-ui/core';

const NumberForm = ({ number, isValid, isPrime, errorMessage, updateNumberValue, submitForm }) => {
    const submitted = typeof(isPrime) === "boolean";
    return (
        <section className="calucalator">
            <form onSubmit={(e) => submitForm(e)} className="calculator__form">
                <TextField
                    disabled={submitted}
                    error={!isValid}
                    helperText={errorMessage || "Use number digits only"}
                    label="Enter a number"
                    onChange={({ target: { value } }) => updateNumberValue(value)}
                    variant="outlined"
                    value={number}
                />
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    disabled={!isValid || !number}
                >
                    {submitted ? "try again" : "Find out"}
                </Button>
            </form>
            {submitted && <div>{isPrime ? "Yeap, is prime" : ":( is not prime"}</div>}
        </section>
    );
};

const mapStateToProps = ({ form }) => ({
    number: form.number,
    isValid: form.isValid,
    isPrime: form.isPrime,
    errorMessage: form.errorMessage
})

const  mapDispatchToProps = (dispatch) => ({
    updateNumberValue: args => dispatch(updateNumberValue(args)),
    submitForm: args => dispatch(submitForm(args))
})

export default connect(mapStateToProps, mapDispatchToProps)(NumberForm);