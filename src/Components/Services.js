import React from "react";
import { Grid,Button,Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery,useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Revolution from "../images/Revolution.jpg";

import FilterNoneIcon from '@material-ui/icons/FilterNone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles = makeStyles(theme=>({
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
    container: {
        padding: "2.5em",
        [theme.breakpoints.down("sm")]: {
            padding: "1.2em 1em",
            textAlign: "center"
        }
    },
    serviceText: {
        padding: "1em",
        [theme.breakpoints.down("xs")]: {
            padding: 0,
            marginBottom: "1em"
        }
    },
    serviceS2: {
        marginTop: "1em"
    },
    serviceSpan: {
        fontFamily: "Pacifico",
        color: theme.palette.primary.main
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
    serviceIcon: {
        fontSize: "13em",
        color: theme.palette.secondary.main
    }
}))

export default function Services(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchxs = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction="column">
            {/* ------ Services Banner ------ */}
            <Grid item className={classes.heroContainer}>
                <Grid container justify="center" alignItems="center">
                    <Grid item >
                        <Typography variant="h2" color="secondary">
                            Services
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* ------------ Custom Software Development Block ----------- */}
            <Grid item className={classes.container}>
                <Grid container justify={matchxs? "center": undefined}>
                    <Grid item className={classes.serviceText}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1">
                            Save Energy, Save Time and Save Money
                        </Typography>
                        <Typography variant="subtitle2" className={classes.serviceS2}>
                            Complete digital solutions from investigation to 
                            <span className={classes.serviceSpan}> celebration.</span>
                        </Typography>
                        <Button variant="outlined" color="secondary" 
                            component={Link} to="/Custom-Software"
                            onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}
                            className={classes.learnButton}>
                            Learn More <DoubleArrowIcon />
                        </Button>
                    </Grid>
                    <Grid item style={{marginLeft:matchxs?"5%":undefined}}>
                        <FilterNoneIcon className={classes.serviceIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* ------------ Mobile App Development Block ----------- */}
            <Grid item className={classes.container}>
                <Grid container justify={matchxs? "center": "flex-end" }>
                    <Grid item className={classes.serviceText}>
                        <Typography variant="h4" gutterBottom>
                            Ios/Andriod App Development
                        </Typography>
                        <Typography variant="subtitle1">
                            Extended Functionality, Extend Access, Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle2" className={classes.serviceS2}>
                            Create a standalone app with either Mobile platform.
                        </Typography>
                        <Button variant="outlined" color="secondary"
                            component={Link} to="/Mobile-Apps"
                            onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}
                            className={classes.learnButton}>
                            Learn More <DoubleArrowIcon />
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight:matchxs?"2%":undefined}}>
                        <PhoneIphoneIcon className={classes.serviceIcon} />
                    </Grid>
                </Grid>
            </Grid>
            {/* ------------ Website Development Block ----------- */}
            <Grid item className={classes.container}>
                <Grid container justify={matchxs? "center": undefined}>
                    <Grid item className={classes.serviceText}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1">
                            Reach More, Discover More, Sell More.
                        </Typography>
                        <Typography variant="subtitle2" className={classes.serviceS2}>
                            Optimized for Search Engines, built for speed. 
                        </Typography>
                        <Button variant="outlined" color="secondary"
                            component={Link} to="/Website"
                            onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}
                            className={classes.learnButton}>
                            Learn More <DoubleArrowIcon />
                        </Button>
                    </Grid>
                    <Grid item style={{marginLeft:matchxs?"2%":undefined}}>
                        <DesktopWindowsIcon className={classes.serviceIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}