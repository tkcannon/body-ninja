import { Box } from "@mui/system";
import Contact from "../../Pages/Contact";

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
      <Contact />
    </Box>
  );
}

export default Footer;
