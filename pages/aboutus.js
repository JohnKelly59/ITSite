import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Overview from "../components/aboutus/Overview";
import OurTeam from "../components/aboutus/OurTeam";
import CenteredTabs from "../components/Tabs";

export default function AboutUs() {
  const tabs = ["Overview", "Our Team"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = (activeTab) => {
    switch (activeTab) {
      case "Overview":
        return <Overview />;
      case "Our Team":
        return <OurTeam />;
    }
  };

  return (
    <>
      <CenteredTabs
        props={{ tabs: tabs, handleChange: handleChange, value: value }}
      />
      {renderTab(tabs[value])}
    </>
  );
}
