import React, { useContext, useState, useRef } from "react";
import { TabContext } from "../Context/TabContext";
// import PropTypes from "prop-types";

const Wizard = () => {
  const { questionsWizard, setAwnsersWizard } = useContext(TabContext);
  const [awnsers, setAwnsers] = useState([]);
  const [finished, setFinished] = useState(false);
  const refInput = useRef();

  const wizard = (questions, done) => {
    if (awnsers.length < questions.length) {
      return questions[awnsers.length];
    } else done();
  };

  return (
    <div id="wizard">
      <div style={{ paddingLeft: "5rem" }}>
        <h2>
          {!finished
            ? wizard(questionsWizard, () => {
                setFinished(true);
              })
            : "Click in restart"}
        </h2>
        {!finished && (
          <input
            ref={refInput}
            style={{ width: "50%" }}
            type="text"
            placeholder="Your awnser comes here...."
          />
        )}
        <button
          style={{ display: "block", marginTop: "1rem" }}
          type="button"
          onClick={() => {
            if (!finished) {
              setAwnsers([...awnsers, refInput.current.value]);
              refInput.current.value = null;
            } else {
              setAwnsersWizard(awnsers);
              setAwnsers([]);
              setFinished(false);
            }
            return;
          }}
        >
          {!finished ? "Next" : "Restart"}
        </button>
      </div>
    </div>
  );
};

Wizard.propTypes = {};

export default Wizard;
