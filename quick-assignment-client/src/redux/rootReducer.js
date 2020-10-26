import { combineReducers } from 'redux';

//Import our reducers

import { userReducer } from './reducres/userReducer'
import { spinnerReducer } from './reducres/spinnerReducer';
import { userListReducer } from './reducres/userListReducer';

const rootReducer = combineReducers({
    user : userReducer,
    spinner : spinnerReducer,
    userList : userListReducer,
})

export default rootReducer