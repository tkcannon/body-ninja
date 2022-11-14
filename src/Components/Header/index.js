import "./style.css";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "center", width: "100%", height: 90 }}>
        <Typography
          id="title"
          variant="h1"
          component="h1"
          color="secondary"
          sx={{ textAlign: "center", top: 0 }}
        >
          BodyNinja
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
