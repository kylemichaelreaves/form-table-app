import React from 'react';

const renderHeader = () => {
    let headerElems = ['id',
                      'firstName',
                      'middleName',
                      'lastName',
                      'birthYear',
                      'birthMonth',
                      'birthDay',
                      'birthTown',
                      'birthCounty',
                      'birthState']
    return headerElems.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    });
  }
export default renderHeader;