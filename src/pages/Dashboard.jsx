import React, { useContext, useEffect } from "react";
// import PropTypes from "prop-types";
import { TabContext } from "../Context/TabContext";

const Dashboard = () => {
  const { dashboardData, getDashboard } = useContext(TabContext);

  useEffect(() => {
    getDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (dashboardData) console.log(dashboardData);
  }, [dashboardData]);

  const findVersions = (array) => {
    const resultsVersion = array.results.map((i) => i.package.version);
    const filterVersions = resultsVersion.filter(
      (i, index) => resultsVersion.indexOf(i) === index
    );
    return filterVersions;
  };

  const sortVersions = () =>
    findVersions(dashboardData).sort((a, b) => {
      if (a === b) {
        return 0;
      }
      
      const aVersion = a.split(".");
      const bVersion = b.split(".");
      for (let i = 0; i < Math.max(aVersion.length, bVersion.length); i++) {
        if (Number(aVersion[i]) >= Number(bVersion[i])) return -1;
        if (Number(aVersion[i]) <= Number(bVersion[i])) return 1;
      }
      return 0;
    });

  const totalMaintainers = (array) => {
    return array.results.reduce((total, i) => {
      const maintainersAmount = i.package.maintainers.length;
      return total + maintainersAmount;
    }, 0);
  };

  const totalManteinersByVersion = () => {
    const totalanteiners = sortVersions(dashboardData).map((i) => {
      const packagesByversion = dashboardData.results.filter(
        (j) => j.package.version === i
      );
      const total = packagesByversion.reduce((total, i) => {
        const maintainersAmount = i.package.maintainers.length;
        return total + maintainersAmount;
      }, 0);
      // console.log(total);
      return { version: i, total };
      //   const maintainers = packagesByversion.map(
      //     (i) => i.package.maintainers
      //   ).length;
      //   return { version: i, amount: maintainers };
    });
    return totalanteiners;
  };

  return (
    <div style={{ paddingLeft: "5rem" }}>
      <div style={{ display: "flex", flexWrap: "nowrap" }}>
        {dashboardData && (
          <>
            <div style={{ paddingRight: "2rem" }}>
              <h2>Dashboard</h2>
              <div>
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
              </div>
            </div>
            <div style={{ paddingRight: "2rem" }}>
              <h2>Data highlights (sort and loop)</h2>
              <div>
                <h3>Package sort versions (Sort)</h3>
                {sortVersions().map((i, index) => (
                  <div
                    key={index}
                    style={{
                      paddingBottom: "1rem",
                      color: `${i.searchScore < 32 ? "red" : "green"}`,
                    }}
                  >
                    <div>{` App Sort version: ${i}`}</div>
                  </div>
                ))}
                <h3>Package versions (foreach || map )</h3>
                {findVersions(dashboardData).map((i, index) => (
                  <div
                    key={index}
                    style={{
                      paddingBottom: "1rem",
                    }}
                  >
                    <div>{`App version: ${i}`}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ paddingRight: "2rem" }}>
              <h2>Data highlights (reduce)</h2>
              <div>
                <h3>Mateiners (Sort)</h3>
                <div
                  style={{
                    paddingBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      paddingBottom: "1rem",
                    }}
                  >{`Amount of Maintainers: ${totalMaintainers(
                    dashboardData
                  )}`}</div>
                  {totalManteinersByVersion().map((i, index) => (
                    <div
                      key={index}
                      style={{
                        paddingBottom: "1rem",
                      }}
                    >{`App version ${i.version} with ${i.total} maintainers`}</div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
