import { hot } from "react-hot-loader/root";
import * as React from "react";

import "./App.scss";

const App = () => (
  <div className="app">
    <h1>Hello World!</h1>
    <p>Foo to the barz</p>
  </div>
);

export default hot(App);
