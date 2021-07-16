import React from 'react';
import { Person } from '../Person';

interface Props {
    people: Person[];
}

export function Table({ people }: Props) {

    const renderHeader = () => {
        let columns = [
            'id',
            'firstName',
            'middleName',
            'lastName',
            'birthDay',
            'birthMonth',
            'birthYear',
            'birthState',
            'birthCounty',
            'birthTown'
        ]
        if (people.length === 0) {
            return <th>{`add people to the array`}</th>
        } else if (people.length > 0) {
        return columns.map((col: string, index: number) => {
            return <th key={index}>{col.toUpperCase()}</th>
            });
        }}
    
    const renderBody = () => {
        return people.map((person) => {
            return (
                // nested state variables are accessed just as they were set in Form
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.firstName}</td>
                    <td>{person.middleName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.birthDay}</td>
                    <td>{person.birthMonth}</td>
                    <td>{person.birthYear}</td>
                    <td>{person.birthTown}</td>
                    <td>{person.birthCounty}</td>
                    <td>{person.birthState}</td>
                </tr>
            )
        })
    }

    return (
        <table id="people">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </table>
    )
}