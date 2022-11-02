import { AppBar, Link, Toolbar } from "@mui/material";

function Nav() {
  return (
    <AppBar position="sticky">
      <nav>
        <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Link
            sx={{ p: 1 }}
            variant="h5"
            href="#About"
            color="inherit"
            underline="none"
          >
            About
          </Link>
          <Link
            sx={{ p: 1 }}
            variant="h5"
            href="#Equipment"
            color="inherit"
            underline="none"
          >
            Equipment
          </Link>
          <Link
            sx={{ p: 1 }}
            variant="h5"
            href="#Contact"
            color="inherit"
            underline="none"
          >
            Contact
          </Link>
        </Toolbar>
      </nav>
    </AppBar>
  );
}

export default Nav;
