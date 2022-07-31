import * as React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const data = [
  {
    id: 1020,
    title: "Heat Waves",
    artist: ["Glass Animals"],
    date: "19/05/2020",
    rating: 4.2,
    url: "https://ia601903.us.archive.org/35/items/mbid-532c81ff-1867-43f3-ac21-3f1ecfa2db07/mbid-532c81ff-1867-43f3-ac21-3f1ecfa2db07-26608390428.jpg",
  },
  {
    id: 2012,
    title: "Titanium",
    artist: ["David Guetta", "Sia"],
    date: "01/06/2011",
    rating: 4.8,
    url: "https://ia801209.us.archive.org/31/items/mbid-6460457d-ff6c-4001-bfd7-2f84202077f3/mbid-6460457d-ff6c-4001-bfd7-2f84202077f3-14869027128.jpg",
  },
  {
    id: 1004,
    title: "Am I Wrong",
    artist: ["Nico & Vinz"],
    date: "12/04/2013",
    rating: 3.6,
    url: "https://ia600200.us.archive.org/8/items/mbid-5dacb6f1-b2b2-46b0-b6b0-5b4d5266cec3/mbid-5dacb6f1-b2b2-46b0-b6b0-5b4d5266cec3-6253105112_thumb500.jpg",
  },
];

export default function SongList() {
  return (
    <Grid
      container
      width="auto"
      marginX={45}
      mt={5}
      sx={{ flexGrow: 1 }}
      direction="column"
    >
      {!data && console.log("Data not Recieved")}
      <Divider
        sx={{
          mt: 5,
        }}
      >
        <Typography variant="h4" color="primary">
          Song List
        </Typography>
      </Divider>

      {data.map((song) => (
        <Grid
          item
          sx={{
            p: 3,
            pb: 0,
            maxWidth: 800,
            margin: 0,
            background: "",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 5,
              margin: 0,
              width: "inherit",
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              borderRadius: 5,
            }}
          >
            <Grid container spacing={5}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={song.url} sx={{ borderRadius: 4 }} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      color="primary"
                      m={0}
                    >
                      {song.title}
                    </Typography>
                    <Typography variant="body1" m={0} gutterBottom>
                      {song.artist.map((rank, i, name) => {
                        if (name.length === i + 1) return `${name}`;
                        else return name.legth;
                      })}
                    </Typography>
                    <Typography mt={6} variant="body2" color="text.secondary">
                      ID: {song.id}
                    </Typography>
                    <Typography
                      sx={{ cursor: "pointer" }}
                      variant="body2"
                      color="secondary"
                    >
                      {song.date}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item justifyContent="flex-end">
                  <Rating
                    name="half-rating-read"
                    defaultValue={song.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography
                    display="flex"
                    justifyContent="flex-end"
                    sx={{ fontWeight: 800 }}
                    color="text.secondary"
                  >
                    {song.rating}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
