import { Paper, Typography } from "@mui/material";

function Shop() {
  return (
    <>
      <Paper sx={{ my: 5 }}>
        <Paper
          sx={{
            my: 15,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "center",
            textAlign: "center",
            padding: "auto",
            minHeight: 300,
          }}
        >
          <Typography variant="h4" sx={{ textDecoration: "underline" }}>
            Shop
          </Typography>
          <Typography>Coming Soon</Typography>
        </Paper>
      </Paper>
    </>
  );
}

export default Shop;
