import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import Status from '../components/Status';

describe("Header", () => {
  it("renders the header", () => {
    render(<Header />);
    expect(screen.getByRole("heading")).toHaveTextContent("Assembly: Endgame");
    expect(screen.getByRole("paragraph")).toHaveTextContent("8 attempts");
  });
});

describe("Status", () => {
  it("renders the status correctly when the status type is incorrect", () => {
    const statusType = "incorrect";
    const lastAnswer = {
      isCorrect: false,
      value: "a",
    };
    render(<Status statusType={statusType} lastAnswer={lastAnswer} />);
    expect(screen.getByRole("heading")).toBeVisible();
    expect(screen.queryByRole("heading").textContent).toBeTruthy();
    expect(screen.queryByRole("heading")).toHaveTextContent(/Farewell|Seriously/);
  });

  it("renders the status correctly when the status type is correct", () => {
    const statusType = "correct";
    const lastAnswer = {
      isCorrect: false,
      value: "a",
    };
    render(<Status statusType={statusType} lastAnswer={lastAnswer} />);
    expect(screen.getByRole("heading")).toBeVisible();
    expect(screen.queryByRole("heading").textContent).toBeTruthy();
    expect(screen.queryByRole("heading")).toHaveTextContent(
      /Good job|right|save the world/i
    );
  });

  it("renders the status correctly when component is loaded for a first time", () => {
    const statusType = "incorrect";
    const lastAnswer = {
      isCorrect: false,
      value: null,
    };
    render(<Status statusType={statusType} lastAnswer={lastAnswer} />);
    expect(screen.queryByRole("heading")).toBeNull();
  });
});