import * as React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

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
      <Typography
        variant="h5"
        noWrap
        ml={3}
        component="div"
        color="primary"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        Song List
      </Typography>

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
                      variant="subtitle1"
                      component="div"
                    >
                      {song.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {song.artist.map((rank, i, name) => {
                        if (name.length === i + 1) return `${name}`;
                        else return name.legth;
                      })}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: {song.id}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      {song.date}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Rating
                    name="half-rating-read"
                    defaultValue={song.rating}
                    precision={0.5}
                    readonly
                  />
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
