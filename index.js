import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todoReducer, updateTodoName } from './redux';

// function shoutLogger(theStore) {
//   return function (next) {
//     return function dispatchAndLog(action) {

//     };
//   };
// }

const logger = theStore => next => (action) => {
  console.log('DISPATCHING!!', action);
  const result = next(action);
  console.log('NEXT STATE!', theStore.getState());
  return result;
};

const store = createStore( // eslint-disable-line
  todoReducer,
  composeWithDevTools(
    applyMiddleware(logger),
  ),
);

store.dispatch(updateTodoName('getting there you fuck'));
