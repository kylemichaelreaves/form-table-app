import React from 'react';
import './App.css';
import { states } from './states';
import getCounties from './getCounties';
import { Person, People, Name, Date, Place } from './Person';

function App() {
  const [id, setId] = React.useState<number>(0);
  const [firstName, setFirstName] = React.useState<string>('')
  const [middleName, setMiddleName] = React.useState<string>('')
  const [lastName, setLastName] = React.useState<string>('')
  const [birthYear, setBirthYear] = React.useState<number>(0)
  const [birthMonth, setBirthMonth] = React.useState<number | string>(0)
  const [birthDay, setBirthDay] = React.useState<number>(0)
  const [birthState, setBirthState] = React.useState<string>('')
  const [birthCounty, setBirthCounty] = React.useState<string>('')
  const [birthTown, setBirthTown] = React.useState<string>('')
  const [people, setPeople] = React.useState<any[]>([])

  const renderHeader = () => {
    let columns = [
      'id',
      'firstName',
      'middleName',
      'lastName',
      'birthYear',
      'birthMonth',
      'birthDay',
      'birthState',
      'birthCounty',
      'birthTown'
    ]
    if (people.length === 0) {
      return <h3>add people to the array to view table</h3>
    } else if (people.length > 0) {
      return columns.map((col: string, index: number) => {
        return <th key={index}>{col.toUpperCase()}</th>
      });
    }
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
  const handleBirthDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDay(e.target.valueAsNumber);
  }
  const handleBirthTownChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthTown(e.target.value);
  }
  const handleBirthCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthCounty(e.currentTarget.value);
  }
  const handleBirthStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBirthState(e.currentTarget.value)
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
      <h1><code>Kyle's Genealogy Thing</code></h1>
      <table id="people">
        <thead>
          <tr>{renderHeader()}</tr>
        </thead>
        <tbody>
          {renderBody()}
        </tbody>
      </table>

      <form onSubmit={onSubmit}>
        <div>

          <input
            required
            value={firstName}
            placeholder='first name'
            id='firstName'
            name='firstName'
            onChange={handleFirstNameChange}
          />

          <input
            value={middleName}
            placeholder='middle name'
            onChange={handleMiddleNameChange}
          />

          <input
            required
            value={lastName}
            placeholder="last name"
            onChange={handleLastNameChange}
          /></div>

        <div>
          <label htmlFor="birthDay">day of birth</label>
          <input
            name="birthDay"
            id="birthDay"
            type='number'
            min='1'
            max='31'
            onChange={handleBirthDayChange}
          // value={birthDay}
          />
          <label htmlFor='birthMonth'>month of birth</label>
          <input
            name='birthMonth'
            id='birthMonth'
            min='1'
            max='12'
            // value={birthMonth}
            onChange={handleBirthMonthChange}
          />
          <label htmlFor='birthYear'>year of birth</label>
          <input
            name='birthYear'
            id='birthYear'
            type='number'
            value={birthYear}
            onChange={handleBirthYearChange}
          />
        </div>
        <div>
          <label>state of birth</label>
          <select
            value={birthState}
            placeholder='state of birth'
            onChange={handleBirthStateChange}>
            {states.map(state =>
              <option key={state} value={state}>
                {state}
              </option>
            )}
          </select>
          <label>county of birth</label>
          <select
            value={birthCounty}
            placeholder='county of birth'
            onChange={handleBirthCountyChange}>
            {getCounties(birthState)}
          </select>
          <label>town or city of birth</label>
          <input
            value={birthTown}
            placeholder='town or city of birth'
            onChange={handleBirthTownChange}
          />

        </div>

        <button>submit</button>

      </form>

    </div>
  );
}

export default App;
