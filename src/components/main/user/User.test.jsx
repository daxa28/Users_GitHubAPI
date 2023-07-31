import { render, screen } from "@testing-library/react";

import User from "./User";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const user = {
  login: "dasdfdvc",
  avatar_url:
    "https://secure.gravatar.com/avatar/25c7c18223fb42a4c6ae1c8db6f50f9b?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png",
};

describe("User component", () => {
  it("User render", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User user={user} />} exact />
        </Routes>
      </BrowserRouter>
    );

    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("dasdfdvc")).toBeInTheDocument();
  });

  it("User snapshot", () => {
    const userSnap = render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User user={user} />} exact />
        </Routes>
      </BrowserRouter>
    );

    expect(userSnap).toMatchSnapshot();
  });
});
