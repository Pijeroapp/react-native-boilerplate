import * as React from 'react';

import Form from '../components/Form';
import ThemedContainer from '../components/ThemedContainer';

export const TodoFormScreen = () => {
  return (
    <ThemedContainer testID="todo-form-screen">
      <Form />
    </ThemedContainer>
  );
};
