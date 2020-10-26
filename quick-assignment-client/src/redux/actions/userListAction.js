import { USER_LIST } from '../actionTypes/actionTypes'

export const getUserList = (users) => {
    return {
        type : USER_LIST.GET_ALL_USER,
        payload : users
    }
}