import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Enzyme, {mount} from 'enzyme';
import { shallow } from 'enzyme';
import { Table } from '../Table';
import { Person } from '../../Person';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });



test('Table renders the props passed to it', () => {
    const props = [{
        id: 0,
        firstName: 'Manny',
        lastName: 'Kant',
        birthDay: 22,
        birthMonth: 'April',
        birthYear: 1720,
        birthState: "Prussia",
        birthCounty: "",
        birthTown: "Königsberg"
    }]

    const component = shallow(<Table people={props} />)
    const mountedComponent = mount(<Table people={props} />)
    
    console.log(component)
    console.log(mountedComponent)

})