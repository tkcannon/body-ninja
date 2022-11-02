import { List, ListItem, Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";

function Hours() {
  return (
    <Container id="Schedule">
      <Typography variant="h3" component="h3">
        Open Times
      </Typography>
      <Stack spacing={1} component="ul">
        <Typography component="li">
          5:30pm - 7pm Monday, Wednesday, Friday
        </Typography>
        <Typography component="li">9am - 11am Saturdays</Typography>
      </Stack>
      <Typography variant="h4" component="h4">
        Time Break Down
      </Typography>
      <Stack spacing={1} component="ul">
        <Typography variant="h5" component="h5">
          Monday, Wednesday, Friday
        </Typography>
        <Typography component="li">5:30pm - 6:00pm: Beginner Class</Typography>
        <Typography component="li">
          6:00pm - 7:00pm: Intermediate Class
        </Typography>
        <Typography variant="h5" component="h5">
          Saturday
        </Typography>
        <Typography component="li">9:00am - 10:00am Intermediate</Typography>
        <Typography component="li">10:00am - 11:00am Weights</Typography>
      </Stack>
    </Container>
  );
}
export default Hours;
