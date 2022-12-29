import CenteredTabs from "../components/Tabs";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function PatientCenter() {
  const tabs = ["Patient Intake Form", "News", "News Archives", "Blog"];
  return (
    <>
      <CenteredTabs props={{ tabs: tabs }} />
    </>
  );
}
