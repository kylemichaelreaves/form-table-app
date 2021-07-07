import React from 'react';
import { Person } from '../Person';

interface Props {
    people: Person[]
}

export function Table({people}: Props) {
    return <table>{ people.map(person => <tr>
        <tr key={person.id}>{person.id}</tr>
          <td>{person.firstName}</td>
          <td>{person.middleName}</td>
          <td>{person.lastName}</td>
          <td>{person.birthDay}</td>
          <td>{person.birthMonth}</td>
          <td>{person.birthYear}</td>
          <td>{person.birthTown}</td>
          <td>{person.birthCounty}</td>
          <td>{person.birthState}</td>
    </tr>)}</table>
}