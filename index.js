import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todoReducer, updateTodoName } from './redux';

const logger = theStore => next => (action) => {
  console.info('DISPATCHING!!', action);
  let result;
  try {
    result = next(action);
    console.info('NEXT_STATE!:', theStore.getState());
  } catch (e) {
    console.warn('There was an error!', e);
  }
  return result;
};

const store = createStore( // eslint-disable-line
  todoReducer,
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);

store.dispatch(updateTodoName('getting there you fuck'));
