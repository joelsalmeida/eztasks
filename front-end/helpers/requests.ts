import { ITodoUpdate, ITodo } from '../interfaces/TodoInterfaces';

export const createTodo = async (newTodo: ITodo) => {
  const response = await fetch('http://localhost:3001/todos', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(newTodo),
  });
};

export const getTodoRequest = async (endpoint: string) => {
  const data = await fetch(`http://localhost:3001/${endpoint}`);
  return data.json();
};

export const deleteTodoRequest = async (id: string) => {
  await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'same-origin',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
};

export const updateTodoRequest = async (
  todoChanges: ITodoUpdate,
  id: string | undefined
) => {
  const { title, description, status } = todoChanges;

  const response = await fetch(`http://localhost:3001/todos/${id}`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'same-origin',

    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({ ...todoChanges }),
  });

  console.log('CHANGES: ' + todoChanges, 'ID: ' + id);
  console.log(response);
};
