import Section from "../Section";
import { Stack, Typography } from "@mui/material";

function Equipment() {
  return (
    <Section id="Equipment" sx={{ flex: 1, mx: "auto" }}>
      <Typography variant="h3" component="h3">
        Equipment
      </Typography>
      <Stack spacing={1} component="ul">
        <Typography component="li">Jump Ropes</Typography>
        <Typography component="li">Tires</Typography>
        <Typography component="li">Barbells</Typography>
        <Typography component="li">Box jumps</Typography>
        <Typography component="li">Kettlebells</Typography>
        <Typography component="li">Medicine Balls</Typography>
        <Typography component="li">Free Weights</Typography>
        <Typography component="li">Weight Sets</Typography>
        <Typography component="li">Boxing Bags</Typography>
        <Typography component="li">Boxing Gloves</Typography>
        <Typography component="li">Ellipticals</Typography>
        <Typography component="li">Jiu-Jitsu Mat</Typography>
        <Typography component="li">Locker Rooms</Typography>
        <Typography component="li">Bathrooms</Typography>
      </Stack>
    </Section>
  );
}
export default Equipment;
