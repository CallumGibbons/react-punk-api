import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});


it("should render the Nav section"), () => {
    //1st, Arrange
    render(<App/>)
    //2nd, Act
    const searchBox = screen.getByPlaceholderText(/Search beers.../i)
    const acidicFilter = screen.getByLabelText(/Acidic (Below pH4)/i)
    const abvFilter = screen.getByLabelText(/High ABV (Above 6%)/i)
    const classicFilter = screen.getByLabelText(/Classic Range/i)
    //3rd, Assert
    expect(searchBox).toBeTruthy();
    expect(abvFilter).toBeTruthy();
    expect(classicFilter).toBeTruthy();
    expect(acidicFilter).toBeTruthy();
}

it("should not render the error message on load", () => {
    //1st, Arrange
    render(<App/>);
    //2nd, Act
    const errorMessage = screen.queryByText(/Error fetching beers:/i);
    //3rd, Assert
    expect(errorMessage).toBeFalsy();
  });