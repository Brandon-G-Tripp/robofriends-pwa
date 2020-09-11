import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import renderer from 'react-test-renderer';

it('expect to render SearchBox component', () => {
   const mockOnChange = () => true;
   const tree = renderer.create(<SearchBox onChange={mockOnChange} />).toJSON();
   expect(tree).toMatchSnapshot();
})