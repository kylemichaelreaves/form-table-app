import React from 'react';
import { Person } from '../Person';
import Table from 'react-bootstrap/Table'

interface Props {
    people: Person[];
}

export function TableComponent({ people }: Props) {

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
        // if there aren't any people, return this string between table header <th> tags
        if (people.length === 0) {
            return <th>{`Save a person to generate a table`}</th>
            // else if there are people, iterate over this array of People
            // and turn it into table column headers
        } else if (people.length > 0) {
        return columns.map((col: string, index: number) => {
            return <th key={index}>{col.toUpperCase()}</th>
            });
        }}

    const renderBody = () => {
        return people.map((person) => {
            return (
                // state variables are accessed just as they were set in Form
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.firstName}</td>
                    <td>{person.middleName}</td>
                    <td>{person.lastName}</td>
                    <td>{person.birthDay}</td>
                    <td>{person.birthMonth}</td>
                    <td>{person.birthYear}</td>
                    <td>{person.birthState}</td>
                    <td>{person.birthCounty}</td>
                    <td>{person.birthTown}</td>
                </tr>
            )
        })
    }

    return (
        <Table id="people">
            <thead>
                <tr>{renderHeader()}</tr>
            </thead>
            <tbody>
                {renderBody()}
            </tbody>
        </Table>
    )
}
