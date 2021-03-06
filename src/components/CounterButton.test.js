import React from 'react';
import { shallow } from 'enzyme';
import CounterButton from './CounterButton';
import renderer from 'react-test-renderer';





it('expect to render CounterButton component', () => {
   const mockColor = 'red';
   const mockOnChange = () => true;
   const tree = renderer.create(<CounterButton color={mockColor} onChange={mockOnChange} />).toJSON();
   expect(tree).toMatchSnapshot();
})

it('correctly increments the counter', () => {
   const mockColor = 'red';
   const wrapper = shallow(<CounterButton color={mockColor} />);
   wrapper.find('[id="counter"]').simulate('click');
   wrapper.find('[id="counter"]').simulate('click');
   expect(wrapper.state()).toEqual({ count: 2 });
})
