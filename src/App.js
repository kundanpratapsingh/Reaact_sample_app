import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Example from "./components/appNavBar";
import ItemsList from "./components/shoppingList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <div className="App">
      <Example />
      <ItemsList />
    </div>
  );
}

export default App;
