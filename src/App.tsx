import React from 'react';
import './App.css';

interface Person {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthYear: string;
  birthMonth: number | string;
  birthDay: number;
  birthTown: string;
  birthCounty: string;
  birthState: string;
}

function App() {
  const [id, setId] = React.useState<number>(0);
  const [firstName, setFirstName] = React.useState<string>('')
  const [middleName, setMiddleName] = React.useState<string>('')
  const [lastName, setLastName] = React.useState<string>('')
  const [birthYear, setBirthYear] = React.useState<number>(0)
  const [birthMonth, setBirthMonth] = React.useState<number | string>(0)
  const [birthDay, setBirthDay] = React.useState<number>(0)
  const [birthTown, setBirthTown] = React.useState<string>('')
  const [birthCounty, setBirthCounty] = React.useState<string>('')
  const [birthState, setBirthState] = React.useState<string>('')
  const [people, setPeople] = React.useState<any[]>([])
  
  const renderHeader = () => {
    let columns = ['id',
                      'firstName',
                      'middleName',
                      'lastName',
                      'birthYear',
                      'birthMonth',
                      'birthDay',
                      'birthTown',
                      'birthCounty',
                      'birthState']
      return columns.map((col: string, index: number) => {
        return <th key={index}>{col.toUpperCase()}</th>
    });
  }
  const renderBody = () => {
    return people.map(({
        id,
        firstName,
        middleName,
        lastName,
        birthYear,
        birthMonth,
        birthDay,
        birthTown,
        birthCounty,
        birthState
    }) => {
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
      );
    });
  }
 
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }
  const handleMiddleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMiddleName(e.target.value);
  }
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }
  const handleBirthYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthYear(e.target.valueAsNumber);
  }
  const handleBirthMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthMonth(e.target.value);
  }
  const handleBirthDayChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDay(e.target.valueAsNumber);
  }
  const handleBirthTownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthTown(e.target.value);
  }
  const handleBirthCountyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthCounty(e.target.value);
  }
  const handleBirthStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthState(e.target.value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setPeople(people => [...people, {
      id: id,
      firstName: firstName,
      middleName: middleName,
      lastName: lastName,
      birthYear: birthYear,
      birthMonth: birthMonth,
      birthDay: birthDay,
      birthTown: birthTown,
      birthCounty: birthCounty,
      birthState: birthState
    }]);
    setId(id + 1);
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setBirthYear(0);
    setBirthMonth('');
    setBirthDay(0);
    setBirthTown('');
    setBirthCounty('');
    setBirthState('');
  }

  return (
    <div className="App">
      
      <header className="App-header">
        
        <p>
          <code>Kyle</code> ist du Meister.
        </p>
        <p>
          Unsere <code>Herr und Gott</code> Kyle.
        </p>
        
        
       
      </header>

    <table id="people">
      <thead>
        <tr>{renderHeader()}</tr>
      </thead>
      <tbody>
        {renderBody()}
      </tbody>
    </table>

    <form onSubmit={onSubmit}>
      <input
        value={firstName}
        onChange={handleFirstNameChange}
      />
    </form>

    </div>
  );
}

export default App;
