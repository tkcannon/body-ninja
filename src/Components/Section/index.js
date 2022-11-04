import { Container, Paper } from "@mui/material";

function Section(props) {
  return (
    <section id={props.id} className={props.className}>
      <Paper elevation={5} sx={{ p: 3, mt: 10 }}>
        <Container>{props.children}</Container>
      </Paper>
    </section>
  );
}

export default Section;
