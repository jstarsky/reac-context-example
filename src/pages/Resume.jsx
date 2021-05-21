import React, { useContext } from "react";
import { TabContext } from "../Context/TabContext";

const Resume = () => {
  const { profileInput } = useContext(TabContext);

  return (
    <div style={{ paddingLeft: "5rem" }}>
      {profileInput ? (
        <>
          <h2>Name</h2>
          <p>{profileInput ? profileInput.name : ""}</p>
          <h2>Surname</h2>
          <p>{profileInput ? profileInput.surname : ""}</p>
          <h2>Age</h2>
          <p>{profileInput ? profileInput.age : ""}</p>
        </>
      ) : (
        <h2>You need to visit firts the tab Profile</h2>
      )}
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
