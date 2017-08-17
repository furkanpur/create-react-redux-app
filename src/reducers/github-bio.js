import axios from 'axios';

export const actionType = {
    REQUESTED: 1,
    FULFILLED: 2,
    REJECTED: 3
};

const initialState = {
    data: {},
    fetching: false,
    fetched: false,
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionType.FULFILLED: {
            return {
                ...state,
                data: action.payload,
                fetching: false,
                fetched: true,
                error: false
            };
        }

        case actionType.REQUESTED: {
            return {
                ...state,
                fetching: true,
                fetched: false,
                error: false
            };
        }

        case actionType.REJECTED: {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: true
            };
        }

        default:
            return state;
    }
};

export const fetchItems = () => {
    return dispatch => {
        dispatch({
            type: actionType.REQUESTED
        });

        return axios
            .get('https://api.github.com/users/furkanpur', {
                timeout: 1000
            })
            .then(response => {
                dispatch({
                    type: actionType.FULFILLED,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: actionType.REJECTED,
                    data: err
                });
            });
    };
};
