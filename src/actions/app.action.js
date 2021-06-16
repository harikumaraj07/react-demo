import {GET_DATA_SUCCESSFUL, SET_PAGE_START, SET_DATA_LOADING} from './types';
import {getData} from '../services/app.service';

export const getDataAction = (start, limit) => (dispatch) => {
    dispatch({type: SET_DATA_LOADING});
    return getData(start, limit)
    .then((payload) => {
        dispatch({
            type: GET_DATA_SUCCESSFUL,
            payload
        });
    });
}

export const setPageStartAction = (payload) => (dispatch) => {
    dispatch({
        type: SET_PAGE_START,
        payload
    });
}
