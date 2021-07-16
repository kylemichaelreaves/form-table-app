import React from 'react';
import './App.css';
import { Person } from './Person';
import { Form } from './Form/Form';
import { Table } from './Table/Table';

function App() {
  // people doesn't warrant its own type, since 'people' are multiple Persons
  const [people, setPeople] = React.useState<Person[]>([])

  function addPerson(person: Person) {
    setPeople([...people, person]);
  }
  
  return (
    <div className="App">
      <h1><code>Kyle's Genealogy Thing</code></h1>
      {/* the 'people' state managed in App 
      is passed to the Table to populate it */}
      <Table people={people} />
      {/* a state setter is passed to the Form */}
      <Form onSave={addPerson} />
    </div>
  );
}

export default App;
