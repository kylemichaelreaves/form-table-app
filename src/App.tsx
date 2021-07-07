import React from 'react';
import './App.css';
import { Person } from './Person';
import {Form} from './Form/Form';
import {Table} from './Table/Table';

function App() {

  const [people, setPeople] = React.useState<Person[]>([])
  
  function addPerson(person: Person) {
    console.log(`called addPerson: ${person}`)
    setPeople([...people, person])
  }
  
  // const [person, setPerson] = React.useState(blankPerson);

  // const renderHeader = () => {
  //   let columns = [
  //     'id',
  //     'firstName',
  //     'middleName',
  //     'lastName',
  //     'birthDay',
  //     'birthMonth',
  //     'birthYear',
  //     'birthState',
  //     'birthCounty',
  //     'birthTown'
  //   ]
  //   if (people.length === 0) {
  //     return <h3>add people to the array to view table</h3>
  //   } else if (people.length > 0) {
  //     return columns.map((col: string, index: number) => {
  //       return <th key={index}>{col.toUpperCase()}</th>
  //     });
  //   }
  // }
  // const renderBody = () => {
  //   return people.map(({
  //     id,
  //     firstName,
  //     middleName,
  //     lastName,
  //     birthDay,
  //     birthMonth,
  //     birthYear,
  //     birthState,
  //     birthCounty,
  //     birthTown 
  //   }) => {
  //     return (
  //       <tr key={id}>
  //         <td>{id}</td>
  //         <td>{firstName}</td>
  //         <td>{middleName}</td>
  //         <td>{lastName}</td>
  //         <td>{birthDay}</td>
  //         <td>{birthMonth}</td>
  //         <td>{birthYear}</td>
  //         <td>{birthTown}</td>
  //         <td>{birthCounty}</td>
  //         <td>{birthState}</td>
  //       </tr>
  //     );
  //   });
  // }


  // }

  // const onSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setPeople(people => [...people, {
  //     id,
  //     firstName,
  //     middleName,
  //     lastName,
  //     birthDay,
  //     birthMonth,
  //     birthYear,
  //     birthState,
  //     birthCounty,
  //     birthTown
  //   }]);
  //   setId(id + 1);
  //   setFirstName('');
  //   setMiddleName('');
  //   setLastName('');
  //   setBirthDay(0);
  //   setBirthMonth('');
  //   setBirthYear(0);
  //   setBirthTown('');
  //   setBirthCounty('');
  //   setBirthState('');
  // }

  return (
    <div className="App">
      <h1><code>Kyle's Genealogy Thing</code></h1>
      <Table people={people}/>
      <Form onSave={addPerson}/>
      
      
      {/* <table id="people">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>  */}
      
    </div>
  );
}

export default App;
