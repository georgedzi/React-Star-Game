import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import { test, expect } from "@jest/globals";
import "@testing-library/jest-dom/extend-expect"; // Import the jest-dom library


test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
