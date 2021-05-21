import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";

const TabContext = React.createContext();

const TabProvider = ({ children }) => {
  const [profileInput, setProfileInput] = useState(null);
  const [dashboardData, setDashboardData] = useState(null);

  const getDashboard = () => {
    fetch("https://api.npms.io/v2/search?q=react")
      .then((response) => response.json())
      .then((data) => setDashboardData(data));
  };

  useEffect(() => {
    if (profileInput) console.log(profileInput);
  }, [profileInput]);

  return (
    <TabContext.Provider
      value={{ profileInput, setProfileInput, getDashboard, dashboardData }}
    >
      {children}
    </TabContext.Provider>
  );
};

TabContext.propTypes = {};

export { TabContext, TabProvider };
