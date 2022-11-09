import "./style.css";
import { Card } from "@mui/material";
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
      <Box className="Hero-Gradient">
        <Card
          sx={{
            boxShadow: 8,
            width: 300,
            p: 2,
            m: "auto",
          }}
        >
          Join a fitness community that is passionate, determined, and
          supportive. Whether you’re here for a day or committed to years, we’ve
          got exactly what you need. We change each class to fit your needs.
        </Card>
      </Box>
    </Box>
  );
}

export default Hero;
