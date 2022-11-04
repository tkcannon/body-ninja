import "./style.css";
import { AppBar, Toolbar, Typography } from "@mui/material";

function Header() {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography
          id="title"
          variant="h1"
          component="h1"
          color="secondary"
          position="fixed"
        >
          <span className="Ninja"></span>
          BodyNinja
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
