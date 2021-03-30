import React from 'react';
import renderer from 'react-test-renderer';
import { QueryClient, QueryClientProvider } from 'react-query';

import Form from '../../../components/Form';

const queryClient = new QueryClient();

describe('<Form />', () => {
  it('has 3 children', () => {
    const tree = renderer
      .create(
        <QueryClientProvider client={queryClient}>
          <Form />
        </QueryClientProvider>,
      )
      .toJSON();
    // @ts-ignore
    expect(tree.children.length).toBe(3);
  });
});
