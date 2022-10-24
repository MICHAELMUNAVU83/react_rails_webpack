import React from "react";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from "../configureStore";
function App() {
  return (
    <Provider store={store}>
      <div>
        hey
        <Greeting />
        hjk9jkhjkl
      </div>
    </Provider>
  );
}

export default App;
