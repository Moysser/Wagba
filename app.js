import React from "react";
import ReactDOM from "react-dom";

const Logo = () => {
  return <div className="logo"></div>;
};

const NaveItem = () => {
  return (
    <div className="nav-items">
      <ul className="list-items">
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
        <li className="list-item"></li>
      </ul>
    </div>
  );
};

const App = () => {
  <Logo />;
};

const root = ReactDOM.createRoot(Document.getElementById("root"));

root.render(App);
