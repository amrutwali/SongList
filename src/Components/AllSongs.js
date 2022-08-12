import { Grid } from "@mui/material";
// Components
import SongList from "./Home/SongListComponent";

const AllSongs = () => {
  return (
    <Grid width="auto" marginX={45}>
      <SongList />
    </Grid>
  );
};

export default AllSongs;
