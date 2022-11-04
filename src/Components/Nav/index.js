import { AppBar, Toolbar, Link } from "@mui/material";

const NavLink = (props) => {
  return (
    <Link href={props.href} variant="h6" color="secondary" underline="none">
      {props.children}
    </Link>
  );
};

function Nav() {
  return (
    <AppBar position="sticky" sx={{ top: "8vh" }}>
      <nav>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <NavLink href="/">Home</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
          <NavLink href="/Shop">Shop</NavLink>
        </Toolbar>
      </nav>
    </AppBar>
  );
}

export default Nav;
