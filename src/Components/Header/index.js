import "./style.css";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Hero from "../Hero";
import Nav from "../Nav";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ justifyContent: "center", width: "100%" }}>
        <Typography
          id="title"
          variant="h1"
          component="h1"
          color="secondary"
          position="sticky"
          sx={{ textAlign: "center", top: 0 }}
        >
          <span className="Ninja"></span>
          BodyNinja
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
