import ReactDOM from "react-dom";
import "./index.css";

// import { App } from "./App";
// import { Parent } from "./Parent";
import { State } from "./State";
import { AdminFlagProvider } from "./components/providers/AdminFlagProvider";

// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <AdminFlagProvider>
    <State />
  </AdminFlagProvider>,
  document.getElementById("root")
);
