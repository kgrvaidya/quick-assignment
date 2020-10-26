import { USER_LIST } from '../actionTypes/actionTypes';

const initialState = {
    users : []
}

export const userListReducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_LIST.GET_ALL_USER : return {
            ...state,
            users : action.payload
        }
        default : {
            return state
        }

    }
}
