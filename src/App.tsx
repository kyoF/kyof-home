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
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>test</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <RichTextEditor />
        </header>
      </div>
    </div>
  );
}

export default App;
