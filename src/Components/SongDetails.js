// Route
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
// Components

const SongDetails = () => {
  const { songID } = useParams();

  return (
    <div>
      <Typography
        align="center"
        variant="h4"
        color="primary"
        sx={{ marginTop: "50px" }}
      >
        {songID}
      </Typography>
    </div>
  );
};

export default SongDetails;
