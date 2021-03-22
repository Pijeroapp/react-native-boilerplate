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
    });
  } catch (error) {
    throw new Error(error);
  }
};
