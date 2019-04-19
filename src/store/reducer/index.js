import { combineReducers } from 'redux';
import DataReducer from './Data';

const rootReducer = combineReducers({
    dataReducer: DataReducer
});

export default rootReducer;