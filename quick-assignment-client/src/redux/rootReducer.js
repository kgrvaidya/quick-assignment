import { combineReducers } from 'redux';

//Import our reducers

import { userReducer } from './reducres/userReducer'
import { spinnerReducer } from './reducres/spinnerReducer';

const rootReducer = combineReducers({
    user : userReducer,
    spinner : spinnerReducer
})

export default rootReducer