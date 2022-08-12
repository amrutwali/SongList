import { Grid } from "@mui/material";
//Components
import ArtistList from "./Home/ArtistListComponent";

const AllArtists = () => {
  return (
    <Grid width="auto" marginX={45}>
      <ArtistList />
    </Grid>
  );
};

export default AllArtists;
