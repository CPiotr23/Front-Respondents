import { combineReducers } from 'redux';
import pageReducer from './pageReducer';

const reducers = combineReducers({
    page: pageReducer
})

export default reducers;