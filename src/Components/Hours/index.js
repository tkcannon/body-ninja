import { Stack, Typography } from "@mui/material";
import Section from "../Section";

function Hours() {
  return (
    <Section id="Schedule" sx={{ flex: 1 }}>
      <Typography variant="h3" component="h3">
        Class Times
      </Typography>

      <Stack spacing={1} component="ul">
        <Typography variant="h5" component="h4" sx={{ py: 1 }}>
          Monday, Wednesday, Friday
        </Typography>
        <Typography component="li">5:30pm - 6:00pm: Beginner</Typography>
        <Typography component="li">
          6:00pm - 7:00pm: Intermediate / Advanced
        </Typography>
        <Typography variant="h5" component="h4" sx={{ py: 1 }}>
          Tuesday, Thursday
        </Typography>
        <Typography component="li">
          11:00am - 12:00am Intermediate / Advanced
        </Typography>
        <Typography variant="h5" component="h4" sx={{ py: 1 }}>
          Saturday
        </Typography>
        <Typography component="li">
          9:00am - 10:00am Intermediate / Advanced
        </Typography>
        <Typography component="li">10:00am - 11:00am Weights</Typography>
      </Stack>
    </Section>
  );
}
export default Hours;
