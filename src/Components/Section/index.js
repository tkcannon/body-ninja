import { Paper } from "@mui/material";

function Section(props) {
  return (
    <section>
      <Paper elevation={20} sx={{ p: 3, my: 6 }}>
        {props.children}
      </Paper>
    </section>
  );
}

export default Section;
