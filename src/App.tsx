import React from "react";
import "./App.css";
import RichTextEditor from "./components/RichTextEditor";

function App() {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
      </head>
      <div className="App">
        <header className="App-header">
          <RichTextEditor />
        </header>
      </div>
    </div>
  );
}

export default App;
