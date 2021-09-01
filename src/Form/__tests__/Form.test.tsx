import React from 'react';
import { render, screen } from '@testing-library/react';
import { Form } from '../Form';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Person } from '../../Person';

Enzyme.configure({ adapter: new Adapter() });

const props: Person = {
    id: 0,
    firstName: 'Manny',
    lastName: 'Kant',
    birthDay: 22,
    birthMonth: 'April',
    birthYear: 1720,
    birthState: "Prussia",
    birthCounty: "Regierungsbezirk Königsberg",
    birthTown: "Königsberg"
}

xtest('Form props renders in the document', () => {
    const onSave = jest.fn();
    const wrapper = shallow(< Form onSave={onSave}/>)
    expect(wrapper.props()).toBe(true)
    })

test('Form render with testing-library', () => {
    const onSave = jest.fn();
    render(<Form onSave={onSave}/>)
    

})