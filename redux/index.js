const initialState = {
  newTodoName: '',
  todos: [],
};

const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const UPDATE_TODO_NAME = 'UPDATE_TODO_NAME';

export const addTodo = () => ({ type: ADD_TODO });
export const removeTodo = todo => ({ type: REMOVE_TODO, payload: todo });
export const updateTodoName = text => ({ type: UPDATE_TODO_NAME, payload: text });

export function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TODO_NAME:
      return { ...state, newTodoName: action.payload };
    case ADD_TODO:
      return { ...state, todos: [...state.todo, { name: state.newTodoName }] };
    case REMOVE_TODO:
      return state;
    default:
      return state;
  }
}
