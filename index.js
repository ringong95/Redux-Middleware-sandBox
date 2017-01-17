import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todoReducer, updateTodoName } from './redux';

const store = createStore( // eslint-disable-line
  todoReducer,
  composeWithDevTools(
    applyMiddleware(),
  ),
);

const next = store.dispatch;
store.dispatch = function dispatchAndLog(action) {
  console.log('dispatching', action);
  const result = next(action);
  console.log('next state', store.getState());
  return result;
};

store.dispatch(updateTodoName('Punching monkeys...'));
