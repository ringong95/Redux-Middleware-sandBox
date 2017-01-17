import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as todoReducer, updateTodoName } from './redux';

const store = createStore( // eslint-disable-line
  todoReducer,
  composeWithDevTools(
    applyMiddleware(),
  ),
);

// console.log('dispatching', action);
// const result = next(action);
// console.log('next state', store.getState());
// return result;

function whisperLogger(theStore) {
  const next = theStore.dispatch;
  return function dispatchAndLog(action) {
    console.log('*dispatching*', action);
    const result = next(action);
    console.log('*next state*', store.getState());
    return result;
  };
}

function shoutLogger(theStore) {
  const next = theStore.dispatch;
  return function dispatchAndLog(action) {
    console.log('DISPATCHING!!', action);
    const result = next(action);
    console.log('NEXT STATE!', store.getState());
    return result;
  };
}

function applyMonkeWare(theStore, monkeywares) { //eslint-disable-line
  monkeywares.forEach((monkeyware) => {
    theStore.dispatch = monkeyware(theStore); // eslint-disable-line
  });
}

applyMonkeWare(store, [shoutLogger, whisperLogger]);

store.dispatch(updateTodoName('getting there you fuck'));
