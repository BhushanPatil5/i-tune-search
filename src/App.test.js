import React from 'react';
import {render} from '@testing-library/react';
import HomeLayout from './components/HomeLayout';
import SearchGrid from './components/search-grid';

describe("HomeLayout.vue", () => {

  test('renders i-Tune text', () => {
    const { getByText } = render(<HomeLayout />);
    const element = getByText(/i-Tune/i);
    expect(element).toBeInTheDocument();
  });

  test("render a tag with text Start Searching", () => {
    const { getByText } = render(<HomeLayout />);
    const startSearchingButton = getByText(/Start Searching/i);
    const textStartSearching = startSearchingButton.textContent;
    const hrefStartSearching = startSearchingButton.href;
    let str = hrefStartSearching.replace("http://localhost/", "/")

    expect(textStartSearching).toBe("Start Searching");
  });

  test("Start Searching should have correct route to path", () => {
    const { getByText } = render(<HomeLayout />);
    const startSearchingButton = getByText(/Start Searching/i);
    const hrefStartSearching = startSearchingButton.href;
    expect(hrefStartSearching).toBe("http://localhost:3000/search-grid");
  });
});


describe("SearchGrid.vue", () => {

  test("has search input", () => {
    const { getByText, getByTestId } = render(<SearchGrid />);
    const input = getByTestId("input");
    expect(input).toBeInTheDocument()
  });

  test("has search icon", () => {
    const {getByTestId } = render(<SearchGrid />);
    const submit = getByTestId("submit");
    expect(submit).toBeInTheDocument()
 });
 
});