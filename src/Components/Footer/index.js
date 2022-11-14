import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import Map from "../Map";
import Contact from "../Contact";

function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        p: 5,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Map />
      <Contact />
      <Box>
        <Link
          href="https://www.facebook.com/profile.php?id=100076347166246"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon color="secondary" fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
