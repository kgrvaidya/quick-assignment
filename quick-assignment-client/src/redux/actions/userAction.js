import { USER } from '../actionTypes/actionTypes'

export const getUser = (user) => {
    return {
        type : USER.GET_USER,
        payload : user
    }
}