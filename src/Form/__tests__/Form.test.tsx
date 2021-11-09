import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { FormComponent } from '../Form';
import { FormComponentProps } from '../Form';
// import Enzyme from 'enzyme';
// import { shallow } from 'enzyme';
// import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Person } from '../../Person';

// Enzyme.configure({ adapter: new Adapter() });
describe('FormComponent', () => {
    const props: Person = {
        id: 0,
        firstName: 'Manny',
        lastName: 'Kant',
        birthDay: '22',
        birthMonth: 'April',
        birthYear: '1720',
        birthState: "Ohio",
        birthCounty: "Cleveland",
        birthTown: "Cleveland"
    }

    xtest('FormComponents props exists', (props) => {
        render(< FormComponent onSave={props} />)

    })

    xtest('validates inputs', () => {

    })

    xtest('FormComponent render with testing-library', (props) => {
        const onSave = jest.fn();
        render(<FormComponent onSave={props} />)

    })
}
)
