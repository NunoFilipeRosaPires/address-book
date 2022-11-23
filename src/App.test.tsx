import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouteConfig } from "./routes/RouteConfig";
import { store } from "./store";

describe("App tests", function () {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </Provider>
  );
  const app = document.querySelector(".App");

  test("header rendering", () => {
    const header = app?.querySelector("h1");
    expect(header?.textContent).toBe("Address Book");
  });

  test("footer rendering", () => {
    const footer = app?.querySelector("footer");
    expect(footer?.textContent).toBe("All rights reserved");
  });

  // it("users list testing", async () => {
  //   const dispatch = jest.fn();
  //   const thunk = getUsersList({ batchSize: 50, page: 1 });
  //   await thunk(dispatch, () => initialState, undefined);
  //   console.log(dispatch.mock.calls);
  // });
});
