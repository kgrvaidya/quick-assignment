import { SPINNER } from '../actionTypes/actionTypes';

const initialState = {
    loading : false
}

export const spinnerReducer = (state = initialState, action) => {
    switch(action.type) {
        case SPINNER.START_LOADING : return {
            ...state,
            loading : true
        }
        break;
        case SPINNER.STOP_LOADING : return {
            ...state,
            loading : false
        }
        break;
        default : {
            return state
        }

    }
}
