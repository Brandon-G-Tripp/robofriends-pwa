import React from 'react';
import { shallow } from 'enzyme';
import CardList from './CardList';
import renderer from 'react-test-renderer';

it('expect to render CardList component', () => {
   const mockRobots = [
      {
         id: 1,
         name: 'Jon Snow',
         username: 'JONJON',
         email: 'john@gmail.com'
      }
   ]
   const tree = renderer.create(<CardList robots={mockRobots}/>).toJSON();
   expect(tree).toMatchSnapshot();
})