import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "../Search.jsx";

jest.mock("axios");

describe("Search", () => {
  test("fetches stories from API and displays them", async () => {
    const stories = [
      { objectId: "1", title: "Hello" },
      { objectId: "2", title: "React" },
    ];

    axios.get.mockImplementationOnce(() => {
      Promise.resolve({ data: { hits: stories } });
    });

    render(<Search />);

    act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });
});
