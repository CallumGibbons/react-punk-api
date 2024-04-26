import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders app component", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});

it("should render the Nav section"),
  () => {
    //1st, Arrange
    render(<App />);
    //2nd, Act
    const searchBox = screen.getByPlaceholderText(/Search beers.../i);
    const acidicFilter = screen.getByLabelText(/Acidic (Below pH4)/i);
    const abvFilter = screen.getByLabelText(/High ABV (Above 6%)/i);
    const classicFilter = screen.getByLabelText(/Classic Range/i);
    //3rd, Assert
    expect(searchBox).toBeTruthy();
    expect(abvFilter).toBeTruthy();
    expect(classicFilter).toBeTruthy();
    expect(acidicFilter).toBeTruthy();
  };

it("should not render the error message on load", () => {
  //1st, Arrange
  render(<App />);
  //2nd, Act
  const errorMessage = screen.queryByText(/Error fetching beers:/i);
  //3rd, Assert
  expect(errorMessage).toBeFalsy();
});

it(" should render beer cards on load", async () => {
  render(<App />);

  // Wait for the beer cards to be rendered
  const beerCards = await screen.findAllByTestId("beer-card");

  // Ensure that at least one beer card is rendered
  expect(beerCards.length).toBeGreaterThan(0);
});

it("should activate high abv filter on click", async () => {
  render(<App />);

  // Check if high ABV filter checkbox is initially unchecked
  const highABVFilterCheckbox = screen.getByTestId(
    "high-abv-filter"
  ) as HTMLInputElement;
  expect(highABVFilterCheckbox.checked).toBe(false);

  // Click high ABV filter
  fireEvent.click(highABVFilterCheckbox);

  // Filter is now active
  expect(highABVFilterCheckbox.checked).toBe(true);
});

it("should activate acidic filter on click", async () => {
  render(<App />);

  // Check if acidic filter checkbox is initially unchecked
  const acidicFilterCheckbox = screen.getByTestId(
    "acidic-filter"
  ) as HTMLInputElement;
  expect(acidicFilterCheckbox.checked).toBe(false);

  // Click acidic filter
  fireEvent.click(acidicFilterCheckbox);

  // Filter is now active
  expect(acidicFilterCheckbox.checked).toBe(true);
});

it("should activate classic filter on click", async () => {
  render(<App />);

  // Check if classic filter checkbox is initially unchecked
  const classicFilterCheckbox = screen.getByTestId(
    "classic-filter"
  ) as HTMLInputElement;
  expect(classicFilterCheckbox.checked).toBe(false);

  // Click classic filter
  fireEvent.click(classicFilterCheckbox);

  // Filter is now active
  expect(classicFilterCheckbox.checked).toBe(true);
});

it("should render 20 beer cards on load", async () => {
  render(<App />);

  const initialBeerCards = await screen.findAllByTestId("beer-card");
  const initialBeerCount = initialBeerCards.length;

  expect(initialBeerCount).toEqual(20);
});

it("should render beer profile when name is clicked", async () => {
  render(<App />);
  const profileLink = await screen.findByText("Buzz");
  fireEvent.click(profileLink);
  const profile = screen.getByTestId("beer-profile") as HTMLDivElement;
  expect(profile).toBe(true);
});
