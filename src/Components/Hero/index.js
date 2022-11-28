import "./style.css";
import { Button, Card, Link, Typography } from "@mui/material";
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
        className="cta"
        elevation={5}
        sx={{
          maxWidth: "500px",
          color: "white",
          textShadow: "1px 1px black",
          border: "5px solid rgba(59,110,127,.08)",
          bgcolor: "rgba(119,221,255,.12)",
          p: 3,
          mt: "auto",
          mx: "auto",
        }}
      >
        <Typography variant="h4" component="p">
          JOIN THE BODYNINJA BOOTCAMP
        </Typography>

        <Link
          href="mailto:tkcannon.dev@gmail.com"
          method="get"
          encType="application/x-www-form-urlencoded"
          sx={{ textDecoration: "none" }}
        >
          <Button variant="outlined" color="secondary" fullWidth sx={{ mt: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>Contact For Info</Typography>
          </Button>
        </Link>
      </Card>
    </Box>
  );
}

export default Hero;
