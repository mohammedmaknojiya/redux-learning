import { React } from "react";
import { Provider } from "react-redux";

import store from "./store/store";
import BugTrackerApp from "./components/BugTrackerApp";

const App = () => {
  return (
    <Provider store={store}>
      <div>Redux Example</div>
      <div>
        <BugTrackerApp />
      </div>
    </Provider>
  );
};

export default App;
