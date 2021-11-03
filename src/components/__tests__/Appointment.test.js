import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
// import Application from "components/Application";
import Appointment from "components/Appointment/index.js";

// afterEach(cleanup);

describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });
});