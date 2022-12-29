import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs({ props }) {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#Cfffca" }}>
      <Tabs value={props.value} onChange={props.handleChange} centered>
        {props.tabs.map((prop, index) => (
          <Tab label={prop} />
        ))}
      </Tabs>
    </Box>
  );
}
