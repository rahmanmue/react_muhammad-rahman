import { render, screen } from "@testing-library/react";
import { act, renderHook } from "@testing-library/react-hooks";
import Input, { useInputValue } from "../useInputValue";

describe("when rendered", () => {
  it("renders Input Component", () => {
    const { result } = renderHook(() => useInputValue("Test"));
    expect(result.current.value).toEqual("Test");
  });
});
