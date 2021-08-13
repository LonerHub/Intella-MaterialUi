import React from "react";
import { Grid, Button, Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Estimate from "../../images/Estimate.jpg";

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles(theme => ({
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px"
    },
    learnButton: {
        ...theme.typography.button,
        fontWeight: "600",
        borderWidth: 2,
        marginTop: "1em",
        "&:hover": {
            borderWidth: 2
        }
    },
    background: {
        backgroundImage: `url(${Estimate})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50em",
        width: "100%",
        padding: "2.5em",
        [theme.breakpoints.down("sm")]: {
            height: "35em",
            padding: "1.2em 1em",
            textAlign: "center"
        }
    }
}))

export default function CallToAction(props) {
    const classes = useStyles();
    return(
        <Grid container alignItems="center" justify="space-between" className={classes.background}>
            <Grid item>
                <Typography variant="h2">
                    Simple Software. <br/>
                    Revolutionary Results.
                </Typography>
                <Typography variant = "subtitle1">
                    Take advantage of the 21st century.
                </Typography>
                <Button variant="outlined" color="secondary" 
                    component={Link} to="/The-Revolution"
                    onClick={()=>{props.setValue(2)}}
                    className={classes.learnButton}>
                    Learn More <DoubleArrowIcon />
                </Button>
            </Grid>
            <Hidden smDown>
                <Grid item style={{textAlign: "center"}}>
                    <Button 
                        variant="contained" color="secondary"
                        onClick={()=>{props.setValue(5)}}
                        component={Link} to="/Estimate"
                        className={classes.button}
                    >
                        Free Estimate
                    </Button>
                </Grid>
            </Hidden>
        </Grid>
    )
}