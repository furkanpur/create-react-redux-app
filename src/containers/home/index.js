import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Translate } from 'react-redux-i18n';
import {
    decrement,
    decrementAsync,
    increment,
    incrementAsync
} from '../../reducers/counter';

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
            isDecrementing
        } = this.props;

        return (
            <div>
                <h1>
                    <Translate value="application.title" />
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
    isDecrementing: state.counter.isDecrementing
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            increment,
            incrementAsync,
            decrement,
            decrementAsync
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
