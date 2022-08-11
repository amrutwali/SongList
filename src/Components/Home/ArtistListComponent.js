import { Divider, Typography } from "@mui/material";

export default function ArtistList() {
  return (
    <>
      <Divider
        sx={{
          mt: 5,
        }}
      >
        <Typography variant="h4" color="primary" sx={{ fontWeight: 800 }}>
          Artist List
        </Typography>
      </Divider>
    </>
  );
}
