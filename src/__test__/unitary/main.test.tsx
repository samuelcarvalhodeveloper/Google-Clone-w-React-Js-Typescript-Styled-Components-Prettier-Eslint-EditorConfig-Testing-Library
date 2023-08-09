import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../../App";
import { GOOGLE_LOGO_ALT_TEXT } from "../constants/pages/index/pageElementsAltTextConstants";

describe("Test Main Module Behavior", () => {
  test("Test If React Dom with React-Router-Dom BrowserRouter Component Was Configured Correctly", () => {
    const { getByAltText } = render(<App />, { wrapper: BrowserRouter });

    expect(getByAltText(GOOGLE_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
