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
          position="sticky"
          sx={{ top: 0 }}
        >
          <span className="Ninja"></span>
          BodyNinja
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
