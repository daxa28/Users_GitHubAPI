import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "../../reducers/index";

describe("Main component", () => {
  test("renders Main component ", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
  });
});
