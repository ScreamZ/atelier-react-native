import React from 'react'
import LoginScreen from '../Login'

import renderer from 'react-test-renderer'

test('Is home rendered correctly', () => {
  const tree = renderer.create(<LoginScreen />).toJSON()
  expect(tree).toMatchSnapshot()
});
