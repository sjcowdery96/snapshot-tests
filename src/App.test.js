import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'

import App from './App';

test('renders my Github Bio', async () => {
  //can't get this test to work even when my actual bio renders...
  //fetch.mockResponseOnce(JSON.stringify({ myBio: "Let's get technical." }))
  render(<App />);
  const myBio = await waitFor(() => screen.getByRole('button', screen.getByRole('heading', { level: 2 })))
  expect(myBio).toHaveTextContent("Let's get technical.");
});

test('renders a snapshot', () => {
  const tree = renderer.create(<App />).toJSON()
  expect(tree).toMatchSnapshot()
})


