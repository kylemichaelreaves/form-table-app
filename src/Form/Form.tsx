import React from 'react';
import { Person } from '../Person';
import getCounties from '../getCounties';
import { states } from '../states';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// creating an initial 'blank' state for the useState hook
let blankPerson: Person = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    birthState: '',
    birthCounty: '',
    birthTown: ''
}

interface Props {
    // casting the type onto a function which will set state
    onSave: (person: Person) => void;
}

export function FormComponent({ onSave }: Props) {
    // since the props were specified earlier
    //  we can use a single hook to manage many variables
    const [person, setPerson] = React.useState(blankPerson);

    return <>

        {/* <div>
            <input
                required
                value={person.firstName}
                placeholder='first name'
                id='firstName'
                name='firstName'
                onChange={e => setPerson({ ...person, firstName: e.target.value })}
            />
            <input
                value={person.middleName}
                placeholder='middle name'
                id='middleName'
                name='middleName'
                onChange={e => setPerson({ ...person, middleName: e.target.value })}
            />
            <input
                required
                value={person.lastName}
                placeholder="last name"
                onChange={e => setPerson({ ...person, lastName: e.target.value })}
            />
        </div> */}

        <div>
            <label>day of birth</label>
            <input
                value={person.birthDay}
                name="birthDay"
                id="birthDay"
                type='text'
                onChange={e => setPerson({ ...person, birthDay: e.target.value })}
            />
            <label>month of birth</label>
            <input
                value={person.birthMonth}
                name='birthMonth'
                id='birthMonth'
                onChange={e => setPerson({ ...person, birthMonth: e.target.value })}
            />
            <label>year of birth</label>
            <input
                name='birthYear'
                id='birthYear'
                type='number'
                value={person.birthYear}
                onChange={e => setPerson({ ...person, birthYear: e.target.value })}
            />
        </div>
        <div>
            <label>state of birth</label>
            <select
                value={person.birthState}
                placeholder='state of birth'
                onChange={e => setPerson({ ...person, birthState: e.target.value })}>
                {states.map(state =>
                    <option key={state} value={state}>
                        {state}
                    </option>
                )}
            </select>
            <label>county of birth</label>
            <select
                value={person.birthCounty}
                placeholder='county of birth'
                onChange={e => setPerson({ ...person, birthCounty: e.target.value })}>
                {getCounties(person.birthState)}
            </select>
            <label>town or city of birth</label>
            <input
                value={person.birthTown}
                placeholder='town or city of birth'
                onChange={e => setPerson({ ...person, birthTown: e.target.value })}
            />
        </div>
        {/* setting the person,
        incrementing the intial id to generate unique ids,
        and resetting to initial state */}



        <Form>
            <Row className="mb-3">

                <Form.Group as={Col} md="3">
                    <InputGroup.Text>first name</InputGroup.Text>
                    <Form.Control
                        required
                        type="text"
                        value={person.firstName}
                        onChange={e => setPerson({ ...person, firstName: e.target.value })}
                    />
                </Form.Group>


                <Form.Group as={Col}>
                    <Form.Label>middle name</Form.Label>
                    <Form.Control
                        type="text"
                        value={person.middleName}
                        onChange={e => setPerson({ ...person, middleName: e.target.value })}
                    />
                </Form.Group>


                <Form.Group as={Col}>
                    <Form.Label>last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={person.lastName}
                        onChange={e => setPerson({ ...person, lastName: e.target.value })}
                    />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col}>
                    <Form.Label>day of birth</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        value={person.birthDay}
                        onChange={e => setPerson({ ...person, birthDay: e.target.value })}
                    />
                </Form.Group>

            </Row>

        </Form>
        <button onClick={() => [onSave(person), blankPerson.id + 1, setPerson(blankPerson)]}>Save Person</button>
    </>

}