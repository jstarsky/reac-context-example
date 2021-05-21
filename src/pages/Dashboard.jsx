import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";
import { TabContext } from "../Context/TabContext";

const Dashboard = () => {
  const { dashboardData, getDashboard } = useContext(TabContext);

  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ paddingLeft: "5rem" }}>
      <h2>Dashboard</h2>
      <div>
        {dashboardData && (
          <>
            <h3>{`Totla: ${dashboardData.total}`}</h3>
            {dashboardData.results.map((i, index) => (
              <div
                key={index}
                style={{
                  paddingBottom: "1rem",
                  color: `${i.searchScore < 32 ? "red" : "green"}`,
                }}
              >
                <div>{`name: ${i.package.name}`}</div>
                <div>{`score: ${i.searchScore}`}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
