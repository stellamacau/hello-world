import React from "react";

class NavItem extends React.Component {
  render() {
    return (
      <li>
        <a
          href={this.props.url}
          className={`block py-2 px-4 text-slate-300 hover:bg-slate-700 hover:text-white rounded-md ${
            this.props.active ? "bg-slate-700" : ""
          }`}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}

export default NavItem;
