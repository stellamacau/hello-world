import React from "react";
import NavItem from "./NavItem";

class App extends React.Component {
  render() {
    return (
      <ul className="bg-slate-900 py-2 px-8 flex justify-center gap-x-2">
        <NavItem active={true} url="https://google.com">
          Google
        </NavItem>
        <NavItem url="https://apple.com">Apple</NavItem>
        <NavItem url="https://microsoft.com">Microsoft</NavItem>
      </ul>
    );
  }
}

export default App;
