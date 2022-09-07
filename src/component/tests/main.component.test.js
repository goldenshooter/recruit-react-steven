import Main from "../main";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Should test Main page", () => {
  const mockProps = {
    userName: "Steven",
  };
  test("Should render Main properly by default", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main {...mockProps} />} />
        </Routes>
      </BrowserRouter>
    );

    const container = screen.getByTestId("main-container");
    expect(container).toBeInTheDocument();
  });

  test("Inputs should work as expected", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main {...mockProps} />} />
        </Routes>
      </BrowserRouter>
    );

    let cardNumberInput = screen.getByTestId("main-name-input");
    userEvent.type(cardNumberInput, "123");
    expect(cardNumberInput.value).toBe("123");
  });
});
