import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../FormCoding";

describe("FormPage", () => {
  test("render FormPage component", () => {
    render(<Form />);
    // screen.debug();
    expect(
      screen.getByText("Pendaftaran Peserta Coding Bootcamp")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/No Handphone/)).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Latar Belakang Pendidikan/)
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText(/Kelas Coding yang Dipilih/)
    ).toBeInTheDocument();
  });

  test("input text Nama", () => {
    render(<Form />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Rahman" },
    });

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Rahman");
  });

  test("input text With Number", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText("No Handphone:"), {
      target: { value: "23" },
    });
    expect(screen.getByLabelText("No Handphone:").value).toBe("23");
  });

  test("test submit button", () => {
    render(<Form />);

    fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
      target: { value: "Rahman" },
    });

    fireEvent.change(screen.getByLabelText("No Handphone:"), {
      target: { value: "23" },
    });

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("Rahman");
    expect(screen.getByLabelText(/No Handphone/).value).toBe("23");

    fireEvent.click(screen.getByText("Reset"));

    expect(screen.getByLabelText(/Nama Lengkap/)).toHaveValue("");
    expect(screen.getByLabelText(/No Handphone/).value).toBe("");
  });
});
