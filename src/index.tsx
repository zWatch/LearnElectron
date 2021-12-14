import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router, Route, Routes, NavLink, Link, Outlet } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root"));
