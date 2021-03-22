import React from 'react';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { StyleSheet, Text, View } from 'react-native';

import { getTodos } from './api/queries/todos.query';
import { Todo } from './models';
import Form from './components/Form';

const queryClient = new QueryClient();

const TodoList = () => {
  const { status, error, data } = useQuery<Todo, Error, Todo[]>(
    'todos',
    getTodos,
  );

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>{error?.message}</Text>;
  }

  if (data) {
    return (
      <>
        <Text>list:</Text>
        {data?.map((item: Todo) => (
          <Text key={item.id}>{item.title}</Text>
        ))}
      </>
    );
  }
  return null;
};

export default function App() {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <TodoList />
        <Form />
      </QueryClientProvider>
    </View>
  );
}

const color = '#fff';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
