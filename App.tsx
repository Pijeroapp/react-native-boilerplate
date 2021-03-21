import React from 'react';

import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

import { StyleSheet, Text, View } from 'react-native';
import { API } from './constants';

const queryClient = new QueryClient();

type Todo = {
  id: number;
  title: string;
  isFinished: boolean;
};

type Params = {
  queryKey: [string, { id: number }];
};

async function getTodo(params: Params) {
  const [, { id }] = params.queryKey;

  const response = await fetch(`${API.ROUTES.TODOS}/${id}`);

  if (!response.ok) {
    throw new Error('Problem fetching data');
  }

  const todo = await response.json();

  return todo;
}

const Character = () => {
  const { status, error, data } = useQuery<Todo, Error>(
    ['todo', { id: 1 }],
    getTodo,
  );

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (status === 'error') {
    return <Text>{error?.message}</Text>;
  }

  return data ? <Text>{data.title}</Text> : null;
};

export default function App() {
  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Character />
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
