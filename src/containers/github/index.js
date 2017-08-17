import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchItems } from '../../reducers/github-bio';

class GithubBio extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let { fetchItems } = this.props;

        fetchItems();
    }

    render() {
        let { fetched, data } = this.props;

        return (
            <div>
                {fetched
                    ? <div>
                          Author: {data.login} <br />Bio: {data.bio}
                      </div>
                    : 'Data is fetching'}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    data: state.github.data,
    error: state.github.error,
    fetching: state.github.fetching,
    fetched: state.github.fetched
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ fetchItems }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GithubBio);
