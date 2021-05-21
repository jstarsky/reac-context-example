import React from "react";
// import PropTypes from "prop-types";

const Navbar = ({ items, onClickTab }) => {
  return (
    <div id="navbar" style={{ padding: "1rem", cursor: "pointer" , display:"flex"}}>
      {items.map((i, index) => (
        <div style={{padding:"0rem 5rem"}} key={index} onClick={() => onClickTab(i)}>
          {i}
        </div>
      ))}
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
