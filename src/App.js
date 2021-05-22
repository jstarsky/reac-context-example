// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./pages/Navbar";
import Welcome from "./pages/Welcome";
import { useState } from "react";
import Profile from "./pages/Profile";
import { TabProvider } from "./Context/TabContext";
import Resume from "./pages/Resume";
import Dashboard from "./pages/Dashboard";
import Wizard from "./pages/Wizard";

function App() {
  const [currentTabName, setCurrentTabName] = useState("Wizard");

  const setTab = (tabName) => {
    switch (tabName) {
      case "Welcome":
        return <Welcome />;
      case "Profile":
        return <Profile />;
      case "Dashboard":
        return <Dashboard />;
      case "Wizard":
        return <Wizard />;
      case "Resume":
        return <Resume />;
      default:
        return <div />;
    }
  };

  return (
    <TabProvider className="App">
      <Navbar
        items={["Welcome", "Profile", "Dashboard", "Resume", "Wizard"]}
        onClickTab={(event) => setCurrentTabName(event)}
      />
      {setTab(currentTabName)}
    </TabProvider>
  );
}

export default App;
