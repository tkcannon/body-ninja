import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

function Nav(props) {
  const { activePage, setActivePage } = props;
  const [value, setValue] = useState(activePage);

  useEffect(() => {
    value !== activePage && setValue(activePage);
  }, [activePage, value]);

  return (
    <AppBar position="sticky" sx={{ top: 90, bottom: 0 }}>
      <Box component={"nav"}>
        <Tabs
          variant="fullWidth"
          value={value || "Home"}
          onChange={(event, newValue) => {
            setActivePage(newValue);
          }}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab sx={{ color: "secondary.dark" }} label="Home" value="Home" />
          <Tab sx={{ color: "secondary.dark" }} label="More" value="More" />
          <Tab sx={{ color: "secondary.dark" }} label="Shop" value="Shop" />
        </Tabs>
      </Box>
    </AppBar>
  );
}

export default Nav;
