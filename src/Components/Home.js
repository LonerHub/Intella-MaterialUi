import React from "react";
import { Grid,Button,Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useMediaQuery,useTheme } from "@material-ui/core";
import { Card, CardContent } from "@material-ui/core";
import CallToAction from "./UI/CallToAction";
import { Link } from "react-router-dom";
import Revolution from "../images/Revolution.jpg"

import FilterNoneIcon from '@material-ui/icons/FilterNone';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

const useStyles = makeStyles(theme=>({
    heroContainer: {
        backgroundImage: `url(${Revolution})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        padding: "2.5em",
        color: 'white',
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            padding: "1.2em 1em",
            textAlign: "center"
        },
    },
    buttonContainer: {
        marginTop: 25
    },
    heroButton: {
        borderRadius: 50,
        borderWidth: 2,
        margin: "1em",
        fontSize: "1rem",
        "&:hover":{
            borderWidth: 2
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        margin: "1em",
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
    },
    revContainer: {
        backgroundColor: theme.palette.secondary.light,
        padding: "10em 25em",
        margin: "2.5em 0em",
        [theme.breakpoints.down("lg")]: {
            padding: "5em 25em"
        },
        [theme.breakpoints.down("sm")]: {
            padding: "1em 1em",
            margin: "1.2em 0em"
        }
    },
    revolutionCard: {
        borderRadius: 15,
        boxShadow: theme.shadows[10]
    },
    calltocontainer: {
        height: "18em",
        padding: "2.5em",
        [theme.breakpoints.down("sm")]: {
            padding: "1.2em 1em",
            textAlign: "center",
            height: "15em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "24em"
        } 
    }
}))

export default function Home(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchxs = useMediaQuery(theme.breakpoints.down("xs"));
    return(
        <Grid container direction="column">
            {/* ------ Hero Block ------ */}
            <Grid item className={classes.heroContainer}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item >
                        <Typography variant="h2" align="center">
                            "Bringing Intelligent Works to <br/>the World"<br/>
                            - Intellasphere.
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Grid container className={classes.buttonContainer} justify="center">
                            <Grid item>
                                <Button variant="contained" color="secondary"
                                    component={Link} to="/Estimate"
                                    onClick={()=>{props.setValue(5)}}
                                    className={classes.estimateButton}
                                >
                                    Free Estimate
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" color='secondary'
                                    component={Link} to="/The-Revolution"
                                    onClick={()=>{props.setValue(2)}}
                                    className={classes.heroButton}>
                                    Learn More <DoubleArrowIcon />
                                </Button>
                            </Grid>
                        </Grid>
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
            {/* ------------- Revolution Card ---------------------- */}
            <Grid item className={classes.revContainer}>
                <Card className={classes.revolutionCard}>
                    <CardContent>
                        <Grid container direction="column" justify="center" align="center"
                            textAlign="center"
                        >
                            <Grid item>
                                <Typography variant="h3">
                                    The Revolution
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    Visionary insights coupled with cutting-edge technology is a
                                     recipe for revolution.
                                </Typography>
                                <Button variant="outlined" color="secondary" 
                                    component={Link} to="/The-Revolution"
                                    onClick={()=>{props.setValue(2)}}
                                    className={classes.learnButton}>
                                    Learn More <DoubleArrowIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            {/* ---------------- Information block ---------------------- */}
            <Grid item className={classes.calltocontainer}>
                <Grid container justify={matchxs? "center": "space-between"} spacing={2}>
                    <Grid item>
                        <Typography variant="h2">
                            About Us
                        </Typography>
                        <Typography variant="subtitle1">
                            Let's get personal
                        </Typography>
                        <Button variant="outlined" color="secondary"
                            component={Link} to="/About-us"
                            onClick={()=>{props.setValue(3)}}
                            className={classes.learnButton}>
                            Learn More <DoubleArrowIcon />
                        </Button>
                    </Grid>
                    <Hidden smDown>
                        <Grid item>
                            <SettingsEthernetIcon className={classes.serviceIcon}/>
                        </Grid>   
                    </Hidden>
                    <Grid item>
                        <Typography variant="h2">
                            Contact Us
                        </Typography>
                        <Typography variant="subtitle1">
                            Say hello!!!
                        </Typography>
                        <Button variant="outlined" color="secondary"
                            component={Link} to="/Contact-Us"
                            onClick={()=>{props.setValue(4)}}
                            className={classes.learnButton}>
                            Learn More <DoubleArrowIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex}/>
        </Grid>
    )
}