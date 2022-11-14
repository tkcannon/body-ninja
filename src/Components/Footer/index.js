import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Map from "../Map";
import Contact from "../Contact";
import { Instagram } from "@mui/icons-material";

function Footer() {
  const TextGroup = (props) => {
    return (
      <Stack
        sx={{
          color: "grey",
          textAlign: "left",
          mx: "auto",
          my: 2,
          py: 1,
          width: "100%",
          borderBottom: "1px solid",
        }}
      >
        {props.children}
      </Stack>
    );
  };

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
      <Box
        sx={{
          m: 0,
          p: 0,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <TextGroup>
          <Contact />
          <Typography color="grey">PlaceHolder</Typography>
          <Typography color="grey">PlaceHolder</Typography>
          <Typography color="grey">PlaceHolder</Typography>
          <Typography color="grey">PlaceHolder</Typography>
        </TextGroup>
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
