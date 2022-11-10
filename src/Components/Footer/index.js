import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "@mui/material";
import { Box } from "@mui/system";

function Footer() {
  return (
    <Box
      component={"footer"}
      color="secondary"
      sx={{
        p: 5,
        textAlign: "center",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
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
