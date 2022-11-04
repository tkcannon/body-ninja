import { Box } from "@mui/system";

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
      Footer
    </Box>
  );
}

export default Footer;
