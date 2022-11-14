import { Box, Typography } from "@mui/material";
import { Link } from "@mui/material";

function Contact() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Typography color="grey">Contact at: </Typography>
        <Link
          href="mailto:tkcannon.dev@gmail.com"
          method="get"
          encType="application/x-www-form-urlencoded"
        >
          <Typography color="secondary">tkcannon.dev@gmail.com</Typography>
        </Link>
      </Box>
    </>
  );
}
export default Contact;
