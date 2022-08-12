import { Typography, Grid, Paper } from "@mui/material";

const NotFound = () => {
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
          <Grid item spacing={5}>
            <Typography variant="h4" color={"primary"}>
              404
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">The page does not exist</Typography>
          </Grid>
          <Grid item>
            <a href="/">
              <Typography variant="body1">Go Back Home</Typography>
            </a>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default NotFound;
