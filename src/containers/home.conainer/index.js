import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Home from '../../templates/home.template';
import { getDataAction, setPageStartAction } from '../../actions/app.action';

const propTypes = {
    start: PropTypes.number,
    tasks: PropTypes.array,
    loading: PropTypes.bool,
    getData: PropTypes.func,
};

const defaultProps = {
    start: 0,
    tasks: [],
    loading: false,
    getData: () => { },
};

const HomeContainer = props => {

    const { start, getData, setPageStart, loading } = props;

    useEffect(() => {
        getData(start);
    }, [start]);

    const handleScroll = (e) => {
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
        if (bottom && !loading) {
            setPageStart();
        }
    }

    return <Home {...props} handleScroll={handleScroll} />;
}

HomeContainer.defaultProps = defaultProps;

HomeContainer.propTypes = propTypes;

const mapStateToProps = state => ({
    tasks: state.app.tasks,
    start: state.app.start,
    loading: state.app.loading
});

const mapDispatchToProps = dispatch => ({
    getData: (start) => dispatch(getDataAction(start)),
    setPageStart: () => dispatch(setPageStartAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);