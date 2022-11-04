import React from "react";
import Nav from "../Components/Nav";
import { Stack } from "@mui/system";
import {
  Button,
  ImageList,
  ImageListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Hero from "../Components/Hero";
import Section from "../Components/Section";
import Hours from "../Components/Hours";
import Chloe_0 from "../assets/Chloe_0.jpg";
import Chloe_1 from "../assets/Chloe_1.jpg";
import Chloe_2 from "../assets/Chloe_2.jpg";
import Chloe_3 from "../assets/Chloe_3.jpg";
import Chloe_4 from "../assets/Chloe_4.jpg";
import Chloe_5 from "../assets/Chloe_5.jpg";

function Home() {
  const images = [
    "../assets/Chloe_0.jpg",
    "../assets/Chloe_1.jpg",
    "../assets/Chloe_2.jpg",
    "../assets/Chloe_3.jpg",
    "../assets/Chloe_4.jpg",
    "../assets/Chloe_5.jpg",
  ];
  return (
    <>
      <Hero />
      <Nav />
      <Stack spacing={2}>
        <Section id="About">
          <Typography
            variant="h2"
            component="h2"
            sx={{ borderBottom: "1px solid black", mb: 3 }}
          >
            About
          </Typography>
          <Typography variant="p" component="p">
            BodyNinja was created by Founder Chloe Dalton Lawson who used to be
            overweight her entire life. From the age of 3 years old, Chloe was
            considered “chubby” and by the time she was an adult she was
            considered obese. She weighed 230lbs at her highest weight while
            being only 5 feet tall. Chloe thought about having extreme surgeries
            to help with weight loss and tried every fad diet she could find,
            but they only helped temporarily. After deciding against surgery due
            to cost and worry about the side effects, she began exercising 5
            days a week and slowly the weight started to come down. Eventually
            she tried calorie counting and watching what she ate and this helped
            as well. In 8 months Chloe lost an astonishing 80lbs naturally but
            she was still uncomfortable with the way her body looked due to
            having a lot of excess skin. After 3 years of constant hard work in
            the gym and at home she was able to pull in almost all of the skin
            and built 15 pounds of muscle. Chloe set to work on researching as
            much as she could about fitness, nutrition, and weight lifting.
            After getting multiple certifications and achieving her Bachelor’s
            degree from Weber State University in professional sales to further
            her desire to grow BodyNinja. She has been teaching classes since
            February 2015 at Mori Training Center that utilizes all of the
            information she has accumulated through the years. One of the best
            things about her training is that she understands what is feels like
            to be obese and exercise, she understands how hard it is to control
            food cravings, and works with people without being judgemental. She
            created BodyNinja for those of us who struggle daily to be
            healthier. Her true passion is to be the motivation for everyone
            coming into the gym and to help them live better lives. Her
            intention is to change each person’s life and better their health
            from the inside out. She understands that sometimes life is a daily
            struggle. Chloe is here for anyone who wants a change and for those
            who need someone to help motivate them to get the results they
            desire.
          </Typography>
          <ImageList variant="masonry" cols={2} gap={4}>
            <ImageListItem>
              <img src={Chloe_1} alt="" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={Chloe_4} alt="" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={Chloe_3} alt="" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={Chloe_2} alt="" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={Chloe_0} alt="" loading="lazy" />
            </ImageListItem>
            <ImageListItem>
              <img src={Chloe_5} alt="" loading="lazy" />
            </ImageListItem>
          </ImageList>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Hours />
            <Section id="Equipment">
              <Typography variant="h3" component="h3">
                Equipment
              </Typography>
              <Stack spacing={1} component="ul">
                <Typography component="li">Boxing bags</Typography>
                <Typography component="li">Boxing Ring</Typography>
                <Typography component="li">Jiu-Jitsu Mat</Typography>
                <Typography component="li">Jump Ropes</Typography>
                <Typography component="li">Barbells</Typography>
                <Typography component="li">Free Weights</Typography>
                <Typography component="li">Boxing Gloves</Typography>
                <Typography component="li">Box jumps</Typography>
                <Typography component="li">Row Machines</Typography>
                <Typography component="li">Ellipticals</Typography>
                <Typography component="li">Bumper</Typography>
                <Typography component="li">weight set</Typography>
                <Typography component="li">Sparring Equipment</Typography>
                <Typography component="li">
                  Custom Obstacle Course (outside)
                </Typography>
                <Typography component="li">Locker Rooms</Typography>
                <Typography component="li">Tires Bathrooms</Typography>
                <Typography component="li">Children’s play room</Typography>
              </Stack>
            </Section>
          </div>
        </Section>
        <Section id="Contact">
          <Paper elevation={4} sx={{ p: 2 }}>
            <Typography variant="h5" component="h5">
              Contact
            </Typography>
            <form>
              <TextField
                fullWidth
                id="outlined-name"
                label="Name"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                id="outlined-email"
                label="Email"
                margin="normal"
              ></TextField>
              <TextField
                fullWidth
                id="outlined-message"
                label="Message"
                margin="normal"
              ></TextField>
              <Button>Submit</Button>
            </form>
          </Paper>
        </Section>
      </Stack>
    </>
  );
}

export default Home;
