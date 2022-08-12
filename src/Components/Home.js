import { Grid } from "@mui/material";
// Components
import SongList from "./Home/SongListComponent";
import ArtistList from "./Home/ArtistListComponent";

export default function Home() {
  return (
    <Grid width="auto" marginX={45}>
      <SongList number="10" />
      <ArtistList />
    </Grid>
  );
}
