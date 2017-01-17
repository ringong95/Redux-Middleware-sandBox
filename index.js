import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todoReducer, updateTodoName } from './redux';

const store = createStore( // eslint-disable-line
    todoReducer,
    composeWithDevTools(
        applyMiddleware(),
    ),
);

dispatchAndLog(store, updateTodoName('Hey tim'));
