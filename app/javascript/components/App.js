import React from "react";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from "../configureStore";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
