import React from "react";
import { Box, Grid, Typography, Button } from "@material-ui/core";

export default (props) => (
  <Box py={10} bgcolor="secondary.main" color="white">
    <Grid container justify="center">
      <Grid item xs={10}>
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Typography variant="h4">Open Job Listing</Typography>
          </Box>
          <Box ml="auto" mr={1}>
            <Button variant="contained" color="primary" disableElevation>
              Log In
            </Button>
          </Box>
          <Box>
            <Button
              onClick={props.openNewJobModal}
              variant="contained"
              color="primary"
              disableElevation
            >
              Post a Job
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </Box>
);
