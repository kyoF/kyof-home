import React from "react";
import "./App.css";
import RichTextEditor from "./components/RichTextEditor";
import Blog from "./Blog";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
      </head>
      <div className="App">
	<Link to="/Blog">Blog</Link>
        <RichTextEditor />
      </div>
    </div>
  );
}

export default App;
