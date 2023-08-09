import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import Index from "../../pages/Index";
import { USER_COUNTRY_ELEMENT_TEXT } from "../constants/pages/index/pageElementsInnerTextConstants";
import {
  GOOGLE_LOGO_ALT_TEXT,
  HEADER_MORE_APPS_FROM_GOOGLE_BUTTON_IMAGE_ALT_TEXT,
} from "../constants/pages/index/pageElementsAltTextConstants";

describe("Test Index Domain Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText, getByText } = render(<Index />);

    expect(getByAltText(GOOGLE_LOGO_ALT_TEXT)).toBeTruthy();
    expect(
      getByAltText(HEADER_MORE_APPS_FROM_GOOGLE_BUTTON_IMAGE_ALT_TEXT),
    ).toBeTruthy();
    expect(getByText(USER_COUNTRY_ELEMENT_TEXT)).toBeTruthy();
  });
});
