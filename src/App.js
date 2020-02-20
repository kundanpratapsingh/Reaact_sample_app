import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Example from "./components/appNavBar";
import ItemsList from "./components/shoppingList";

function App() {
  return (
    <div className="App">
      <Example />
      <ItemsList />
    </div>
  );
}
export default App;
