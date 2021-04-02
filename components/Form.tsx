import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import i18n from 'i18n-js';

import {
  View,
  TextInput,
  StyleSheet,
  Switch,
  Text,
  Button,
} from 'react-native';
import { useMutation, useQueryClient } from 'react-query';

import { colors } from '../styles';
import { addTodo } from '../api/mutations/todo.mutation';

const Form = () => {
  const [title, setTitle] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const toggleSwitch = () => setIsFinished((previousState) => !previousState);
  const queryClient = useQueryClient();

  const formMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const onSubmit = (e: any) => {
    e.preventDefault();
    formMutation.mutate({
      id: uuidv4(),
      title,
      isFinished,
    });
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={setTitle}
        value={title}
        placeholder={i18n.t('todoTitle', { defaultValue: 'Todo title' })}
      />
      <View style={styles.checkboxContainer}>
        <Text>
          {i18n.t('haveYouFinishedTheTask', {
            defaultValue: 'Have you finished the task?',
          })}
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isFinished ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isFinished}
        />
      </View>
      <Button
        onPress={onSubmit}
        title={i18n.t('submit', { defaultValue: 'Submit' })}
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
