import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import historyActions from '../../redux/actions/history';

const History = ({ primes, notPrimes }) => (
    <section className="history">
        <div className="history__primes">
            <h2>Primes</h2>
            <div>
                {primes.map((num, index) => <h1 key={index}>{num}</h1>)}
            </div>
        </div>
        <div className="history__not-primes">
            <h2>Not primes</h2>
            {notPrimes.map((num, index) => <h1 key={index}>{num}</h1>)}
        </div>
    </section>
);

const mapStateToProps = ({ history }) => ({
    items: history.items,
    primes: history.primes,
    notPrimes: history.notPrimes,
    visible: history.visible
})

const  mapDispatchToProps = (dispatch) => (
    {...bindActionCreators(historyActions, dispatch)}
)

export default connect(mapStateToProps, mapDispatchToProps)(History);