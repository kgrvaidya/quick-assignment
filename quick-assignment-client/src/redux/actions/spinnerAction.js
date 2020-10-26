import { SPINNER } from '../actionTypes/actionTypes'

export const startLoading = () => {
    return {
        type : SPINNER.START_LOADING
    }
}

export const endLoading = () => {
    return {
        type : SPINNER.STOP_LOADING
    }
}