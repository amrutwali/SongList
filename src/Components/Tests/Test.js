import { Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useSongsFetch } from "../../Hooks/useSongsFetch";

const Test = () => {
  const { state } = useSongsFetch();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      mt={15}
    >
      <Paper elevation={4} sx={{ backgroundColor: "secondary", p: "50px" }}>
        <Grid
          container
          rowSpacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item>
            <Typography variant="h5">{JSON.stringify(state.data)}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Test;
