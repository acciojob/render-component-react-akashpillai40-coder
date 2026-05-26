import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/App.css";

function App() {
  return (
    <p>I am learning React. My life is getting better.</p>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
