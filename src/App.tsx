import React from "react";
import "./App.css";
import MainRoute from "./routes/mainRoute.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={{ width: "100vw", height: "100vh" }}>
        <MainRoute />
      </div>
    </Provider>
  );
}

export default App;
