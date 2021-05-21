import React, { useContext, useState } from "react";
// import PropTypes from "prop-types";
import { TabContext } from "../Context/TabContext";

const Profile = () => {
  const [name, setName] = useState(null);
  const [surname, setSurname] = useState(null);
  const [age, setAge] = useState(null);

  const { profileInput, setProfileInput } = useContext(TabContext);

  const onSubmit = (event) => {
    event.preventDefault();
    setProfileInput({ name, surname, age });
  };

  return (
    <div style={{ paddingLeft: "5rem" }}>
      <form onSubmit={onSubmit}>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
          placeholder="Name"
          onChange={(event) => setName(event.target.value)}
          defaultValue={profileInput && profileInput.name}
        />
        <p>Enter your surname:</p>
        <input
          type="text"
          placeholder="Surname"
          onChange={(event) => setSurname(event.target.value)}
          defaultValue={profileInput && profileInput.surname}
        />
        <p>Enter your age:</p>
        <select
          name="Age"
          style={{ width: "70px" }}
          onChange={(event) => setAge(event.target.value)}
          defaultValue={profileInput && profileInput.age}
        >
          {["18-20", "21-26", "27-40", "More that 40"].map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
