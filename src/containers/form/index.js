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
            </form>
            {submitted && <div>{isPrime ? "Yeap, is prime" : ":( is not prime"}</div>}
        </Grid>
    );
};

const mapStateToProps = ({ form }) => ({
    number: form.number,
    isValid: form.isValid,
    isPrime: form.isPrime,
    errorMessage: form.errorMessage
})

const  mapDispatchToProps = (dispatch) => (
    {...bindActionCreators(formActions, dispatch)}
)

export default connect(mapStateToProps, mapDispatchToProps)(NumberForm);