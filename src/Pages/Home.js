import React from "react";
import { Stack } from "@mui/system";
import { Box, Typography } from "@mui/material";
import Section from "../Components/Section";
import Hours from "../Components/Hours";
import Equipment from "../Components/Equipment";
import FBPlug from "../Components/FBPlug";

function Home() {
  return (
    <>
      <Stack spacing={2}>
        <Section id="About">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h2" component="h2">
              About the Bootcamp
            </Typography>
            <Typography variant="p" component="p" sx={{ py: 3 }}>
              The BodyNinja bootcamp is a 6 week long fitness class with a focus
              on weight loss and improving physical health.
            </Typography>
            <Hours />
            <Equipment />
          </Box>
        </Section>
      </Stack>
    </>
  );
}

export default Home;
