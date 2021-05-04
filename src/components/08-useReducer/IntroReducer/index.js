const todoState = [
  {
    id: 1,
    todo: "Comprar Pan",
    done: false,
  },
];

function todoReducer(state = todoState, action) {
  //añadir a todo
  if (action?.type === "AGREGAR_TODO") {
    return [...state, action.payload];
  }
  return state;
}

let todos = todoReducer();

const newTodo = {
  id: 1,
  todo: "Comprar Cereal",
  done: false,
};

const agregarTodoAction = {
  type: "AGREGAR_TODO",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
