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
        <Form>
            <Row>
                <InputGroup className="mb-3">
                    <InputGroup.Text>first</InputGroup.Text>
                    <Form.Control
                        value={person.firstName}
                        onChange={e => setPerson({ ...person, firstName: e.target.value })}
                        aria-label="firstName"
                    />
                    <InputGroup.Text>middle</InputGroup.Text>
                    <Form.Control
                        aria-label="middleName"
                        value={person.middleName}
                        onChange={e => setPerson({ ...person, middleName: e.target.value })}
                    />
                    <InputGroup.Text>last</InputGroup.Text>
                    <Form.Control
                        aria-label="lastName"
                        value={person.lastName}
                        onChange={e => setPerson({ ...person, lastName: e.target.value })}
                    />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup className="mb-3">
                    <InputGroup.Text>year</InputGroup.Text>
                    <Form.Control
                        aria-label="birthYear"
                        value={person.birthYear}
                        onChange={e => setPerson({ ...person, birthYear: e.target.value })}
                    />
                    <InputGroup.Text>month</InputGroup.Text>
                    <Form.Control
                        aria-label="birthMonth"
                        value={person.birthMonth}
                        onChange={e => setPerson({ ...person, birthMonth: e.target.value })}
                    />
                    <InputGroup.Text>day</InputGroup.Text>
                    <Form.Control
                        aria-label="birthDay"
                        value={person.birthDay}
                        onChange={e => setPerson({ ...person, birthDay: e.target.value })} />
                </InputGroup>
            </Row>
            <Row>
                <InputGroup className="mb-3">
                    <InputGroup.Text className="mb-3">state of birth</InputGroup.Text>
                    <Form.Select
                        className="mb-3"
                        value={person.birthState}
                        placeholder='state of birth'
                        onChange={e => setPerson({ ...person, birthState: e.target.value })}>
                        {states.map(state =>
                            <option key={state} value={state}>
                                {state}
                            </option>
                        )}
                    </Form.Select>
                    <InputGroup.Text className="mb-3">county of birth</InputGroup.Text>
                    <Form.Select
                        className="mb-3"
                        value={person.birthCounty}
                        placeholder='county of birth'
                        onChange={e => setPerson({ ...person, birthCounty: e.target.value })}>
                        {getCounties(person.birthState)}
                    </Form.Select>
                    <InputGroup.Text className="mb-3">town or city of birth</InputGroup.Text>
                    <Form.Control
                        className="mb-3"
                        value={person.birthTown}
                        placeholder='town or city of birth'
                        onChange={e => setPerson({ ...person, birthTown: e.target.value })}
                    />
                </InputGroup>
            </Row>
        </Form>

        {/* setting the person,
        incrementing the intial id to generate unique ids,
        and resetting to initial state */}

        <Button size="lg"
            onClick={() => [onSave(person),
            blankPerson.id++,
            setPerson(blankPerson)]}>Save Person</Button>{' '}
    </>

}