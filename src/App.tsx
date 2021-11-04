import React from 'react';
import './App.css';
import { Person } from './Person';
import { FormComponent } from './Form/Form';
import { TableComponent } from './Table/Table';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // people doesn't warrant its own type, since 'people' are multiple Persons
  const [people, setPeople] = React.useState<Person[]>([])

  function addPerson(person: Person) {
    setPeople([...people, person]);
  }

  return (
    <Container className="App">
      <h1><code>Kyle's Genealogy Thing</code></h1>
      {/* the 'people' state managed in App  is passed to the Table to populate it */}
      <TableComponent people={people} />
      {/* a state setter is passed to the Form */}
      <FormComponent onSave={addPerson} />
    </Container>
  )
}

export default App;
