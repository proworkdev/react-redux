import { createStore } from 'redux';
import rootReducer from '../store/reducer/index';

const store = createStore(rootReducer)

export default store;