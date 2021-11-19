import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TableComponent } from "../Table";
import { Person } from "../../Person";

// import { shallow } from "enzyme";
// import Enzyme from "enzyme";
// import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
// Enzyme.configure({ adapter: new Adapter() });

describe("TableComponent", () => {
  test("displays default message when the array is empty", () => {
    const emptyPeopleArray: Person[] = [];
    render(<TableComponent people={emptyPeopleArray} />);
    expect(
      screen.getByText("Save a person to generate a table")
    ).toBeInTheDocument();
  });

  test("renders the props passed to it", () => {
    let peopleArray: Person[] = [];

    const props: Person = {
      id: 0,
      firstName: "Manny",
      lastName: "Kant",
      birthDay: "22",
      birthMonth: "April",
      birthYear: "1720",
      birthState: "Ohio",
      birthCounty: "Cleveland",
      birthTown: "Cleveland",
    };

    peopleArray.push(props);
    // expect(peopleArray.length).toEqual(1)
    // fireEvent.click(screen.getByText("Save"));
    render(<TableComponent people={peopleArray} />);
    expect(peopleArray[0].firstName).toBe("Manny");
    expect(peopleArray.length).toBe(1);
  });
});
