import React from "react";
import ReactDOM from "react-dom/client";
import "../styles/App.css";

function App() {
  return (
    <div id="root">
    <p>I am learning React. My life is getting better.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
