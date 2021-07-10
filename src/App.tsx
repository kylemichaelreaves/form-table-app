import React from 'react';
import './App.css';
import { Person } from './Person';
import { Form } from './Form/Form';
import { Table } from './Table/Table';

function App() {
  const [people, setPeople] = React.useState<Person[]>([])

  function addPerson(person: Person) {
    setPeople([...people, person]);
  }
  
  return (
    <div className="App">
      <h1><code>Kyle's Genealogy Thing</code></h1>
      <Table people={people} />
      <Form onSave={addPerson} />
    </div>
  );
}

export default App;
