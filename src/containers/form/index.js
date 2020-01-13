import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import formActions from '../../redux/actions/form';
import { Button, Grid, TextField } from '@material-ui/core';

const NumberForm = ({ number, isValid, isPrime, errorMessage, updateNumberValue, setIsPrimeNumber }) => {
    const submitted = typeof(isPrime) === "boolean";
    return (
        <Grid
          className="prime-app"
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
            <form action="" onSubmit={(e) => setIsPrimeNumber(e, isPrime, number)}>
                <TextField
                    xs={12}
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
                {submitted && <div>{isPrime ? "Yeap, is prime" : ":( is not prime"}</div>}
            </form>
        </Grid>
    );
};

const mapStateToProps = state => ({
    number: state.form.number,
    isValid: state.form.isValid,
    isPrime: state.form.isPrime,
    errorMessage: state.form.errorMessage
})

const  mapDispatchToProps = (dispatch) => (
    {...bindActionCreators(formActions, dispatch)}
)

export default connect(mapStateToProps, mapDispatchToProps)(NumberForm);