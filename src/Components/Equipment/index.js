import { Box, Paper, Stack, Typography } from "@mui/material";
import Carousel from "../Carousel";
import image0 from "../../assets/Equipment/20221112_110926.jpg";
import image1 from "../../assets/Equipment/20221112_110953.jpg";
import image2 from "../../assets/Equipment/20221112_111008.jpg";

function Equipment() {
  const images = [
    {
      path: image0,
      label: "Dumbbell rack",
    },
    {
      path: image1,
      label: "Exercise Room",
    },

    {
      path: image2,
      label: "Weight Sets",
    },
  ];
  return (
    <Paper
      id="Equipment"
      elevation={5}
      sx={{ display: "flex", flexWrap: "wrap", m: 3 }}
    >
      <Box sx={{ flex: 1, p: 3 }}>
        <Typography variant="h3" component="h3">
          Equipment
        </Typography>
        <Stack spacing={1} component="ul">
          <Typography component="li">Jump Ropes</Typography>
          <Typography component="li">Tires</Typography>
          <Typography component="li">Barbells</Typography>
          <Typography component="li">Dumbbells</Typography>
          <Typography component="li">Kettlebells</Typography>
          <Typography component="li">Box jumps</Typography>
          <Typography component="li">Medicine Balls</Typography>
          <Typography component="li">Weight Sets</Typography>
          <Typography component="li">Boxing Bags & Gloves</Typography>
          <Typography component="li">Ellipticals</Typography>
        </Stack>
      </Box>
      <Box sx={{ flex: 1, minWidth: "300px" }}>
        <Carousel images={images} />
      </Box>
    </Paper>
  );
}

export default Equipment;
