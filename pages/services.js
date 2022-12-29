import * as React from "react";
import CenteredTabs from "../components/Tabs";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import PhysicalTherapy from "../components/services/PhysicalTherapy";
import OccupationalTherapy from "../components/services/OccupationalTherapy";
import SpeechTherapy from "../components/services/SpeechTherapy";
import ABATherapy from "../components/services/ABATherapy";
import OtherServices from "../components/services/OtherServices";

export default function Services() {
  const tabs = [
    "Physical Therapy",
    "Occupational Therapy",
    "Speech Therapy",
    "ABA Therapy",
    "Other Services",
  ];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = (activeTab) => {
    switch (activeTab) {
      case "Physical Therapy":
        return <PhysicalTherapy />;
      case "Occupational Therapy":
        return <OccupationalTherapy />;
      case "Speech Therapy":
        return <SpeechTherapy />;
      case "ABA Therapy":
        return <ABATherapy />;
      case "Other Services":
        return <OtherServices />;
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
