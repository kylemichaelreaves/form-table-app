import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import { TableComponent } from "../Table";
import { Person } from "../../Person";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

describe("TableComponent", () => {
  test("displays default message when the array is empty", () => {
    const emptyPeopleArray: Person[] = [];
    render(<TableComponent people={emptyPeopleArray} />);
    expect(screen.getByText("Save a person to generate a table")).toBeInTheDocument()
  });


  test("renders the props passed to it", () => {
    let peopleArray: Person[] = [];

    const props: Person = [
      {
        id: 1,
        firstName: "Manny",
        lastName: "Kant",
        birthDay: "22",
        birthMonth: "April",
        birthYear: "1720",
        birthState: "Prussia",
        birthCounty: "Königsberg",
        birthTown: "Königsberg",
      },
    ];
    peopleArray.push(props)
    render(<TableComponent people={peopleArray} />);
    // expect(screen.getByText(peopleArray[0].firstName)).toBe('Manny')

  });
});
