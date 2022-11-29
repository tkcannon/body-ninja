import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "@mui/material";
import { Box } from "@mui/system";
import Map from "../Map";
import { Instagram } from "@mui/icons-material";
import FBPlug from "../FBPlug";

function Footer() {
  return (
    <Box
      component={"footer"}
      sx={{
        textAlign: "center",
        bgcolor: "primary.main",
        color: "secondary.main",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          m: 2,
        }}
      >
        <Box>
          <Map />
        </Box>
        <Box>
          <FBPlug />
        </Box>
      </Box>
      {/* links */}
      <Box
        sx={{
          m: 0,
          py: 2,
          display: "flex",
          flexWrap: "wrap",
          borderTop: "1px solid grey",
        }}
      >
        <Box sx={{ m: "auto" }}>
          <Link
            href="https://www.facebook.com/profile.php?id=100076347166246"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon color="secondary" fontSize="large" />
          </Link>
        </Box>
        <Box sx={{ m: "auto" }}>
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Instagram color="secondary" fontSize="large" />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
