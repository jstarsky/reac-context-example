import React from "react";
// import PropTypes from "prop-types";

const Navbar = ({ items, onClickTab }) => {
  return (
    <div
      id="navbar"
      style={{ display: "table", margin: "0 auto" }}
    >
      <div
        style={{
          padding: "1rem",
          display: "flex",
        }}
      >
        {items.map((i, index) => (
          <div
            style={{ padding: "0rem 5rem", cursor: "pointer" }}
            key={index}
            onClick={() => onClickTab(i)}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
