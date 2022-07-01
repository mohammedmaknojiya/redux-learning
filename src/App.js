import { React } from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import BugTrackerApp from "./components/BugTrackerApp";
import CounterApp from "./components/CounterApp";
import FetchDataCustomThunk from "./components/FetchDataCustomThunk";

const App = () => {
  return (
    <Provider store={store}>
      <div>Redux Example</div>
      <div>
        <BugTrackerApp />
        <CounterApp />
        <FetchDataCustomThunk />
      </div>
    </Provider>
  );
};

export default App;
