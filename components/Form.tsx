import React, { useState } from 'react';

import {
  View,
  TextInput,
  StyleSheet,
  Switch,
  Text,
  Button,
} from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { colors } from '../style';
import { API } from '../constants';
import { Todo } from '../models';

const Form = () => {
  const [title, setTitle] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const queryClient = useQueryClient();

  const postTodo = async (todo: Todo) => {
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

  const formMutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    formMutation.mutate({
      id: 0,
      title,
      isFinished: isEnabled,
    });
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder="Todo title"
      />
      <View style={styles.checkboxContainer}>
        <Text>Have you finished this task?</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      <Button
        onPress={onSubmit}
        title="Submit"
        color={colors.primary.default}
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    margin: 12,
    padding: 8,
    borderWidth: 1,
  },
  checkboxContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Form;
