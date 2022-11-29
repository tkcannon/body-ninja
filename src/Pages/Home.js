import React from "react";
import { Stack } from "@mui/system";
import { Box, Button, Link, Paper, Typography } from "@mui/material";
import Hours from "../Components/Hours";
import Equipment from "../Components/Equipment";
import Section from "../Components/Section";

function Home() {
  return (
    <>
      <Section>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ mx: "auto", flex: 2, minWidth: "50vw", px: 3 }}>
              <Typography variant="h2" component="h2">
                About the Bootcamp
              </Typography>
              <Typography variant="p" component="p" sx={{ py: 3 }}>
                The BodyNinja bootcamp is a 6 week long fitness class with a
                focus on weight loss and improving physical health. Join a
                fitness community that is passionate, determined, and
                supportive. Whether you’re here for a day or committed to years,
                we’ve got exactly what you need. We change each class to fit
                your needs.
              </Typography>
            </Box>
            <Paper
              elevation={5}
              sx={{
                m: 3,
                minWidth: "30vw",
                minHeight: 300,
                flex: 1,
              }}
            >
              <Box
                bgcolor="lightGrey"
                sx={{ width: "100%", height: "100%", p: 3 }}
              >
                <Typography variant="h3" component="h3">
                  How to Join
                </Typography>
                <Typography sx={{ my: 3 }}>
                  Check our{" "}
                  <Link href="#" color="secondary.dark" underline="hover">
                    Facebook
                  </Link>{" "}
                  to see when the next class starts or email at{" "}
                  <Link href="#" color="secondary.dark" underline="hover">
                    email@email.com
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <Box sx={{ flex: 2 }}>
              <Hours />
            </Box>
            <Box sx={{ flex: 3, minWidth: "40vw" }}>
              <Equipment />
            </Box>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Home;
