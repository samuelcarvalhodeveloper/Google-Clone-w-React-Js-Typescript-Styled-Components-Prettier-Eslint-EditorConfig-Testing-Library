import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Footer from "../../../../../../components/index/footer/implementation/Footer";
import { USER_COUNTRY_ELEMENT_TEXT } from "../../../../../constants/pages/index/pageElementsInnerTextConstants";

describe("Test Footer Component Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByText } = render(<Footer />);

    expect(getByText(USER_COUNTRY_ELEMENT_TEXT)).toBeTruthy();
  });
});
