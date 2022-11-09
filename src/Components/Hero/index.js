import "./style.css";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Hero() {
  return (
    <Box
      id="Hero"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card
        elevation={5}
        sx={{
          color: "white",
          textShadow: "1px 1px black",
          border: "10px solid rgba(59,110,127,.08)",
          backgroundColor: "rgba(119,221,255,.12)",
          textAlign: "center",
          width: 300,
          p: 4,
          mt: 45,
          mx: "auto",
        }}
      >
        <Typography variant="body1" component="p">
          Join a fitness community that is passionate, determined, and
          supportive. Whether you’re here for a day or committed to years, we’ve
          got exactly what you need. We change each class to fit your needs.
        </Typography>
      </Card>
    </Box>
  );
}

export default Hero;
