import {GET_DATA_SUCCESSFUL, SET_DATA_LOADING, RESET_DATA, SET_PAGE_START} from '../actions/types';

const initialState = {
    tasks: [],
    start: 0,
    size: 10,
    loading: false,
    endReached: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_SUCCESSFUL:
            return {
                ...state,
                tasks: [...state.tasks, ...action.payload],
                endReached: action.payload.length < 10,
                loading: false,
            };
        case SET_PAGE_START:
            return {
                ...state,
                start: action.payload !== undefined ? action.payload : state.start + state.size
            }
        case SET_DATA_LOADING:
            return {
                ...state,
                loading: action.payload !== undefined ? action.payload : !state.loading,
            }
        case RESET_DATA:
            return {
                ...state,
                tasks: [],
                start: 0
            }
        default:
            return state;
    }
};

export default appReducer;
