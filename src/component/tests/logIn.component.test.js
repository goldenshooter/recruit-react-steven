import LogIn from "../logIn";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Should test Login page", () => {
  const mockProps = {
    userName: "Steven",
    setUserName: jest.fn(),
  };
  test("Should render LogIn properly by default", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn {...mockProps} />} />
        </Routes>
      </BrowserRouter>
    );

    const container = screen.getByTestId("login-container");
    expect(container).toBeInTheDocument();

    const ASBLogo = screen.getByTestId("login-asb-logo");
    expect(ASBLogo).toBeInTheDocument();

    const nameInput = screen.getByTestId("login-name-input");
    expect(nameInput).toBeInTheDocument();

    const loginButton = screen.getByTestId("login-save-button");
    expect(loginButton).toBeInTheDocument();
  });

  test("Should make login button disabled, if there is no name", () => {
    const props = {
      ...mockProps,
      userName: undefined,
    };
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIn {...props} />} />
        </Routes>
      </BrowserRouter>
    );

    const loginButton = screen.getByTestId("login-save-button");
    expect(loginButton).toBeDisabled();
  });
});
