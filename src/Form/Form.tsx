import React from 'react';
import { Person } from '../Person';
import getCounties from '../getCounties';
import { states } from '../states';

const blankPerson: Person = {
    id: 0,
    firstName: '',
    middleName: '',
    lastName: '',
    birthYear: 0,
    birthMonth: 0,
    birthDay: 0,
    birthState: '',
    birthCounty: '',
    birthTown: ''
}

interface Props {
    onSave: (person: Person) => void
}

export function Form({ onSave }: Props) {
    const [person, setPerson] = React.useState(blankPerson);

    return <>
        <form>
            <div>
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
            </div>
            <div>
                <label htmlFor="birthDay">day of birth</label>
                <input
                    value={person.birthDay}
                    name="birthDay"
                    id="birthDay"
                    type='number'
                    min='1'
                    max='31'
                    onChange={e => setPerson({ ...person, birthDay: e.target.valueAsNumber })}
                />
                <label htmlFor='birthMonth'>month of birth</label>
                <input
                    value={person.birthMonth}
                    name='birthMonth'
                    id='birthMonth'
                    min='1'
                    max='12'
                    onChange={e => setPerson({ ...person, birthMonth: e.target.valueAsNumber })}
                />
                <label htmlFor='birthYear'>year of birth</label>
                <input
                    name='birthYear'
                    id='birthYear'
                    type='number'
                    value={person.birthYear}
                    onChange={e => setPerson({ ...person, birthYear: e.target.valueAsNumber })}
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
            <button onClick={() => onSave(person)}>Save Person</button>
        </form>

    </>
}