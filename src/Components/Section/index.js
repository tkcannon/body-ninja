import { Box, Container, Paper } from "@mui/material";

function Section(props) {
  return (
    <Box
      component={"section"}
      id={props.id}
      className={props.className}
      sx={props.sx}
    >
      <Paper elevation={20} sx={{ px: 3, py: 7, mt: 5 }}>
        <Container>{props.children}</Container>
      </Paper>
    </Box>
  );
}

export default Section;
