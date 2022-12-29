import CenteredTabs from "../components/Tabs";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

export default function AboutUs() {
  const tabs = ["Pictures", "Videos"];
  return (
    <>
      <CenteredTabs props={{ tabs: tabs }} />
    </>
  );
}
