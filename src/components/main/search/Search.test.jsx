import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

const onChange = jest.fn();
const onClick = jest.fn();

describe("Search component", () => {
  it("renders Search component", () => {
    render(
      <Search
        searchValue=""
        setSearchValue={onChange}
        searchHendler={onClick}
      />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders Search component without searchValue", () => {
    render(<Search setSearchValue={onChange} searchHendler={onClick} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("onChange works", () => {
    render(
      <Search
        searchValue=""
        setSearchValue={onChange}
        searchHendler={onClick}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "Tom");

    expect(onChange).toHaveBeenCalledTimes(3);
  });

  it("onClick works", () => {
    render(
      <Search
        searchValue=""
        setSearchValue={onChange}
        searchHendler={onClick}
      />
    );
    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
