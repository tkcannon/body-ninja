import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";

function Nav(props) {
  console.log(props);
  const { activePage, setActivePage } = props;
  const [value, setValue] = useState(activePage);

  useEffect(() => {
    value !== activePage && setValue(activePage);
  }, [activePage, value]);

  return (
    <AppBar position="sticky" sx={{ top: "80px", bottom: 0 }}>
      <Box component={"nav"}>
        <Tabs
          variant="fullWidth"
          value={value || "Home"}
          onChange={(event, newValue) => {
            console.log(newValue);
            setActivePage(newValue);
          }}
          textColor="secondary"
          indicatorColor="secondary"
        >
          <Tab sx={{ color: "secondary.dark" }} label="Home" value="Home" />
          <Tab sx={{ color: "secondary.dark" }} label="About" value="About" />
          <Tab
            sx={{ color: "secondary.dark" }}
            label="Contact"
            value="Contact"
          />
          <Tab sx={{ color: "secondary.dark" }} label="Shop" value="Shop" />
        </Tabs>
      </Box>
    </AppBar>
  );
}

export default Nav;