import { describe, test, expect } from "@jest/globals";
import { render } from "@testing-library/react";
import SearchEngine from "../../../../../../components/index/search_engine/implementation/SearchEngine";
import { GOOGLE_LOGO_ALT_TEXT } from "../../../../../constants/pages/index/pageElementsAltTextConstants";

describe("Test Search Engine Component Behavior", () => {
  test("Test If Elements Were Placed Correctly", () => {
    const { getByAltText } = render(<SearchEngine />);

    expect(getByAltText(GOOGLE_LOGO_ALT_TEXT)).toBeTruthy();
  });
});
