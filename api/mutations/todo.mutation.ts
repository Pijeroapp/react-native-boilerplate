import { API } from '../../constants';
import { Todo } from '../../models';

export const addTodo = async (todo: Todo) => {
  try {
    await fetch(`${API.ROUTES.TODOS}`, {
      method: 'POST',
      body: JSON.stringify({
        id: todo.id,
        title: todo.title,
        isFinished: todo.isFinished,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

export const removeTodo = async (todo: Todo) => {
  try {
    await fetch(`${API.ROUTES.TODOS}/${todo.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};
