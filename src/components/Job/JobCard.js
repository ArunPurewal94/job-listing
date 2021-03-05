import React from "react";
import { Box, Grid, Typography, Button, makeStyles } from "@material-ui/core";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    border: "1px solid #e8e8e8",
    cursor: "pointer",
    tranistion: ".3s",
    borderRadius: "5px",
    marginBottom: "5px",
    "&:hover": {
      boxShadow: "0px 5px 25px rgba(0,0,0,0.1)",
      borderLeft: "6px solid #4d64e4",
    },
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
    <Box p={2} className={classes.wrapper}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography varaint="subtitle1">{props.title}</Typography>
          <Typography className={classes.companyName} variant="subtitle1">
            {props.companyName}
          </Typography>
        </Grid>
        <Grid container item xs>
          {props.skills.map((skill) => (
            <Grid key={skill} item className={classes.skillChip}>
              {skill}
            </Grid>
          ))}
        </Grid>
        <Grid container item xs direction="column" alignItems="flex-end">
          <Grid item>
            <Typography variant="caption">
              {format(props.postedOn, "dd/MM/yyyy")} | {props.type} |{" "}
              {props.location}
            </Typography>
          </Grid>

          <Grid item>
            <Box mt={2}>
              <Button onClick={props.open} variant="outlined">
                More Info
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
