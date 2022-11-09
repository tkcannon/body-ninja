import {
  Box,
  Paper,
  Typography,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";

function Contact() {
  return (
    <Box
      id="Contact"
      sx={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Paper
        elevation={5}
        sx={{ m: 3, px: 3, py: 3, flex: 2, minWidth: "250px" }}
      >
        <Typography variant="h5" component="h5">
          Contact
        </Typography>
        <form>
          <Box>
            <TextField
              fullWidth
              id="outlined-name"
              label="Name"
              margin="normal"
            ></TextField>
            <TextField
              fullWidth
              id="outlined-email"
              label="Email"
              margin="normal"
            ></TextField>
            <TextareaAutosize label="Message"></TextareaAutosize>
          </Box>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </form>
      </Paper>
      <Paper elevation={5} sx={{ m: 3, flex: 1, minHeight: "25vh" }}>
        <Box
          component={"iframe"}
          sx={{ minHeight: "250px", height: "100%", width: "100%" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1785.1185857173737!2d-111.98368824493593!3d41.1956209301673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8753055ee54f446b%3A0x7a49e16745069eb8!2sMori%20Training%20center%7CBrazilian%20Jiu-Jitsu%20Ogden%20Utah%2C%20Muay-Thai%20self%20defense!5e0!3m2!1sen!2sus!4v1667949698967!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: "0" }}
        ></Box>
      </Paper>
    </Box>
  );
}
export default Contact;
