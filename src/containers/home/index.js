import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setLocale, Translate } from 'react-redux-i18n';
import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync
} from '../../reducers/counter';

function toggleLang(e, lang) {
    e.preventDefault();

    return dispatch => dispatch(setLocale(lang === 'tr' ? 'en' : 'tr'));
}

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {
            count,
            increment,
            decrement,
            incrementAsync,
            decrementAsync,
            isIncrementing,
            isDecrementing,
            toggleLang,
            i18n
        } = this.props;

        return (
            <div>
                <h1>
                    <Translate value="application.title" />
                    <button onClick={event => toggleLang(event, i18n.locale)}>
                        Toggle Language
                    </button>
                </h1>
                <p>
                    Count: {count}
                </p>

                <p>
                    <button onClick={increment} disabled={isIncrementing}>
                        Increment
                    </button>
                    <button onClick={incrementAsync} disabled={isIncrementing}>
                        Increment Async
                    </button>
                </p>

                <p>
                    <button onClick={decrement} disabled={isDecrementing}>
                        Decrementing
                    </button>
                    <button onClick={decrementAsync} disabled={isDecrementing}>
                        Decrement Async
                    </button>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing,
    i18n: state.i18n
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync,
            toggleLang
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
