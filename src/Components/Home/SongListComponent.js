import * as React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Divider from "@mui/material/Divider";
// Data
import data from "../../assets/data";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function SongList(number) {
  return (
    <Grid container mt={5} sx={{ flexGrow: 1 }} direction="column">
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
