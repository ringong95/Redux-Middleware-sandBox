import { createStore } from 'redux';
import { reducer as todoReducer } from './redux/index';

const store = createStore(todoReducer);

console.log(store.getState());
