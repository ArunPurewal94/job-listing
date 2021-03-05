import React from "react";
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  IconButton,
  makeStyles,
} from "@material-ui/core";

import CloseIcon from "@material-ui/icons/Close";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  info: {
    margin: "4px",
  },
  companyName: {
    fontSize: "13.5px",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(0.75),
    borderRadius: "5px",
    display: "inline-block",
    fontWeight: 600,
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "1em",
    borderRadius: "5px",
    transition: ".3s",
    cursor: "pointer",
    fontWeight: 600,
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
      <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography className={classes.companyName}>
            {props.job.title} @ {props.job.companyName}
          </Typography>
          <IconButton onClick={props.closeModal}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body2">Posted on: </Typography>
            &nbsp; &nbsp;
            <Typography variant="caption" display="flex">
              {props.job.postedOn && format(props.job.postedOn, "dd/MM/yyyy")}
            </Typography>
          </Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body2">Job Type: {""}</Typography>
            &nbsp; &nbsp;
            <Typography variant="caption">{props.job.type}</Typography>
          </Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body2">Job Location: </Typography>
            &nbsp; &nbsp;
            <Typography variant="caption">{props.job.location}</Typography>
          </Box>
          <Box className={classes.info}>
            <Typography variant="body2">Job Description: </Typography>
            <Typography variant="caption">{props.job.description}</Typography>
          </Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body2">Company Name: </Typography>
            &nbsp; &nbsp;
            <Typography variant="caption">{props.job.companyName}</Typography>
          </Box>
          <Box className={classes.info} display="flex">
            <Typography variant="body2">Company Website: </Typography>
            &nbsp; &nbsp;
            <Typography variant="caption">{props.job.companyUrl}</Typography>
          </Box>
          <Box ml={0.5}>
            <Typography variant="body2">Skills: </Typography>
            <Grid container alignItems="center">
              {props.job.skills &&
                props.job.skills.map((skill) => (
                  <Grid key={skill} item className={classes.skillChip}>
                    {skill}
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          component="a"
          href="mailto:arunpurewal94@gmail.com"
          target="_blank"
        >
          Apply
        </Button>
      </DialogActions>
    </Dialog>
  );
};
