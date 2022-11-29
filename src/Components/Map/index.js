import { Paper, Box, Typography } from "@mui/material";

function Map() {
  return (
    <Box
      sx={{
        height: "100%",
        maxWidth: "500px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        component="h6"
        sx={{ borderBottom: "1px solid", my: 2 }}
      >
        Loacted At
      </Typography>
      <Box>
        <Typography variant="body1" component="p" color="grey">
          MORI TRAINING CENTER
        </Typography>
        <Typography variant="body1" component="p" color="grey">
          3733 S 250 W OGDEN UT
        </Typography>
      </Box>

      <Paper elevation={5} sx={{ flex: 1, minHeight: "25vh", my: 1 }}>
        <Box
          component={"iframe"}
          sx={{
            minHeight: "250px",
            height: "100%",
            width: "100%",
          }}
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

export default Map;
