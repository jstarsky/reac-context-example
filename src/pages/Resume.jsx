import React, { useContext } from "react";
import { TabContext } from "../Context/TabContext";

const Resume = () => {
  const { profileInput, questionsWizard, awnsersWizard } =
    useContext(TabContext);

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
      {awnsersWizard && awnsersWizard.length === 0 ? (
        <h2>You need to awnser the Wizard form</h2>
      ) : (
        <>
          {awnsersWizard &&
            awnsersWizard.map((i, index) => (
              <div key={index}>
                <h2>{`Question ${questionsWizard[index]}`}</h2>
                <p>{`Response: ${i}`}</p>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

Resume.propTypes = {};

export default Resume;
