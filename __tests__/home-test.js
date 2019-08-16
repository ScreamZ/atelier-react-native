import React from 'react'
import { HomeScreen } from '../src/screens/guest/Home'

import renderer from 'react-test-renderer'

test('Is home rendered correctly', () => {
  const tree = renderer.create(<HomeScreen />).toJSON()
  expect(tree).toMatchSnapshot()
});
