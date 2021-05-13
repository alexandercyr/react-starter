import * as React from "react";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  it("App is rendered", () => {
    // Render App in the document
    const { container } = render(<App />);

    expect(container).toBeTruthy();
  });
});
