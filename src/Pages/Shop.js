import { Paper, Typography } from "@mui/material";
import Nav from "../Components/Nav";
import Section from "../Components/Section";

function Shop(props) {
  const { activePage, setActivePage } = props;
  return (
    <>
      <Nav activePage={activePage} setActivePage={setActivePage} />
      <Section sx={{ my: 5 }}>
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
      </Section>
    </>
  );
}

export default Shop;
