import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Revolution from "../images/Revolution.jpg";

const useStyles = makeStyles(theme => ({
    heroContainer: {
        backgroundImage: `url(${Revolution})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        padding: "5em",
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            padding: "3em 1em",
            textAlign: "center"
        },
    },
}))

export default function MobileApps(props) {
    const classes = useStyles();
    return(
        <Grid container direction="column">
            {/* ------Mobile Apps Banner ------ */}
            <Grid item className={classes.heroContainer}>
                <Grid container justify="center" alignItems="center">
                    <Grid item >
                        <Typography variant="h2" color="secondary">
                           IOS/Android Apps Development
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};
