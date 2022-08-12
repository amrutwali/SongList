import {
  Typography,
  Grid,
  Paper,
  TextField,
  Divider,
  Button,
} from "@mui/material";
import { useState } from "react";

const AddArtist = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (event) => {
    console.log(event);
    alert(firstName + lastName);
  };

  return (
    <>
      <Paper elevation={4} sx={{ m: "50px", p: "30px", mx: "400px" }}>
        <Divider
          sx={{
            m: 2,
            mb: 4,
          }}
        >
          <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>
            Add New Artist
          </Typography>
        </Divider>
        <Grid
          container
          width="auto"
          marginX={20}
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="First Name"
              onChange={(text) => setFirstName(text.currentTarget.value)}
              value={firstName}
              sx={{ widht: "inherit" }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-required"
              label="Last Name"
              onChange={(text) => setLastName(text.currentTarget.value)}
              value={lastName}
            />
          </Grid>
          <Grid item xs={12} fullWidth>
            <Button
              type="submit"
              variant="contained"
              sx={{ height: "100%", mt: "20px", width: "100%" }}
              onClick={onSubmit}
            >
              ADD
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default AddArtist;
