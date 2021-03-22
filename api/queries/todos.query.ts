import { API } from '../../constants';

type getTodoParams = {
  queryKey: [string, { id: number }];
};

export async function getTodo(params: getTodoParams) {
  const [, { id }] = params.queryKey;

  const response = await fetch(`${API.ROUTES.TODOS}/${id}`);

  if (!response.ok) {
    throw new Error('Problem fetching todo');
  }

  const todo = await response.json();

  return todo;
}

export async function getTodos() {
  const response = await fetch(API.ROUTES.TODOS);

  if (!response.ok) {
    throw new Error('Problem fetching todos');
  }

  const todos = await response.json();

  return todos;
}
