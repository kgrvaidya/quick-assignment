import { USER } from '../actionTypes/actionTypes';

const initialState = {
    user : {}
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER.GET_USER : return {
            ...state,
            user : action.payload
        }
        default : {
            return state
        }

    }
}
