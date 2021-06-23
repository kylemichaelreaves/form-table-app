import React from 'react';
import people from './App';

const renderBody = () => {
    return people.map(({ id, firstName, middleName, lastName, birthYear, birthMonth, birthDay, birthTown, birthCounty, birthState }) => {
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{firstName}</td>
          <td>{middleName}</td>
          <td>{lastName}</td>
          <td>{birthYear}</td>
          <td>{birthMonth}</td>
          <td>{birthDay}</td>
          <td>{birthTown}</td>
          <td>{birthCounty}</td>
          <td>{birthState}</td>
        </tr>
      )
    })
  }

export default renderBody;