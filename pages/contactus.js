import * as React from "react";
import CenteredTabs from "../components/Tabs";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Appointment from "../components/contactus/AppointmentForm";
import ContactForm from "../components/contactus/ContactForm";

export default function ContactUs() {
  const tabs = ["Contact Us", "Appointment"];
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderTab = (activeTab) => {
    switch (activeTab) {
      case "Contact Us":
        return <ContactForm />;
      case "Appointment":
        return <Appointment />;
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
