import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Revolution from "../images/Revolution.jpg";

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import DescriptionIcon from '@material-ui/icons/Description';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import BuildIcon from '@material-ui/icons/Build';
import DevicesIcon from '@material-ui/icons/Devices';
import Tree from "../images/Tree.jpg"

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
    container: {
        padding: "2.5em",
        [theme.breakpoints.down("sm")]: {
            padding: "1.2em 1em",
            textAlign: "center"
        }
    },
    firstRowIcons: {
        color: "yellow",
        fontSize: "5rem"
    },
    SecondRowIcon: {
        color: theme.palette.secondary.dark,
        fontSize: "12em"
    },
    scale: {
        textAlign: "right",
        [theme.breakpoints.down("sm")]: {
            textAlign: "center"
        }
    },
    tree: {
        width: "100%"
    }
}))

export default function CustomSoftware(props) {
    const classes = useStyles();
    return(
        <Grid container direction="column">
            {/* ------Custom Software Banner ------ */}
            <Grid item className={classes.heroContainer}>
                <Grid container justify="center" alignItems="center">
                    <Grid item >
                        <Typography variant="h2" color="secondary">
                           Custom Software Development
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* ----------- Custom Software Development block -------------------- */}
            <Grid item container direction="column" className={classes.container}>
                <Grid item container lg={7} style={{marginBottom: "3em"}}>
                    <Typography variant="h2">
                        Custom Software Development
                    </Typography>
                    <Typography variant="body2">
                        Whether we are replacing old software or inventing new solutions, Intellasphere
                        is here to help your business tackle technology.<br/><br/>
                        Using regular commercial software leaves you with a lot of stuff you don't need,
                        without some of the stuff you do need and ultimately controls the way you work.
                        With out using any software at all you risk falling behind competitors and missing
                        out on huge savings from increased efficiency.<br/><br/>
                        Our custom solutions are designd from the ground up with your needs, wants,
                        and goals at the core. This collaborative process produces finely tuned software
                        that is much more effective at improving your workflow and reducing costs than
                        generalized options.<br/><br/>
                        We create exactly what you want, how you want it.
                    </Typography>
                </Grid>
                <Grid item container justify="center" alignItems="center" spacing={5} 
                    style={{textAlign: "center"}}> 
                    <Grid item>
                        <Typography variant='h4'>
                            Save Energy
                        </Typography>
                        <EmojiObjectsIcon className={classes.firstRowIcons}/>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4'>
                            Save Time
                        </Typography>
                        <WatchLaterIcon className={classes.firstRowIcons}/>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4'>
                            Save Money
                        </Typography>
                        <MonetizationOnIcon className={classes.firstRowIcons}/>
                    </Grid>
                </Grid>
            </Grid>
            {/* --------------- Digital Documents and scale ------------------ */}
            <Grid item container justify="space-between" className={classes.container}>
                <Grid item container direction="column" lg={6} justify="flex-start">
                    <Grid item>
                        <Typography variant="h4">
                            Digital Documents & Data
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item lg={6}>
                            <Typography variant="body2">
                                Reduce Errors, Reduce Waste, Reduce Costs.<br/><br/>
                                Billions are spent anually on the
                                purchasing, printing and distribution
                                of paper. On top of the massive
                                envinormental impact this has, it
                                causes harm to you bottom line as well.<br/><br/>
                                By utilizing digital forms and
                                documnts you can remove these
                                obselete expenses, accelerate your
                                communication, and help the earth.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <DescriptionIcon className={classes.SecondRowIcon} />
                        </Grid>
                    </Grid>   
                </Grid>
                <Grid item container direction="column" lg={6} alignItems="flex-end">
                    <Grid item>
                        <Typography variant="h4">
                            Scale
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Grid item>
                            <DonutLargeIcon className={classes.SecondRowIcon} />
                        </Grid>
                        <Grid item lg={6} className={classes.scale}>
                            <Typography variant="body2">
                                Whether you are a large brand, just getting started,
                                or taking off right now, our application
                                architecture ensures pain-free growth and 
                                reliability.
                            </Typography>
                        </Grid>
                    </Grid>   
                </Grid>
            </Grid>
            {/* --------------- Root cause Analysis ------------------------------ */}
            <Grid item container direction="column" justify="center" alignItems="center" className={classes.container}>
                <Grid item>
                    <img src={Tree} alt="Root Analysis" className={classes.tree} />
                </Grid>
                <Grid item style={{textAlign: "center"}}>
                    <Typography variant= "h4">
                        Root-Cause Analysis
                    </Typography>
                    <Typography variant= "body2">
                            Many problems are merely <br/>
                            symptoms of larger, underlying <br/>
                            issues.<br/><br/>
                            We can help you thoroughly <br/>
                            examine all areas of your business <br/>
                            to develop a holistic plan for the <br/>
                            most effective implementation of <br/>
                            technology.
                    </Typography>
                </Grid>
            </Grid>
            {/* ----------------- Automation and user Experience ----------------- */}
            <Grid item container justify="space-between" className={classes.container}>
                <Grid item container direction="column" lg={6} justify="flex-start">
                    <Grid item>
                        <Typography variant="h4">
                            Automation
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item lg={6}>
                            <Typography variant="body2">
                                Reduce Errors, Reduce Waste, Reduce Costs.<br/><br/>
                                Billions are spent anually on the
                                purchasing, printing and distribution
                                of paper. On top of the massive
                                envinormental impact this has, it
                                causes harm to you bottom line as well.<br/><br/>
                                By utilizing digital forms and
                                documnts you can remove these
                                obselete expenses, accelerate your
                                communication, and help the earth.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <BuildIcon className={classes.SecondRowIcon} />
                        </Grid>
                    </Grid>   
                </Grid>
                <Grid item container direction="column" lg={6} alignItems="flex-end">
                    <Grid item>
                        <Typography variant="h4">
                            User Experience Design
                        </Typography>
                    </Grid>
                    <Grid item container justify="flex-end">
                        <Grid item>
                            <DevicesIcon className={classes.SecondRowIcon} />
                        </Grid>
                        <Grid item lg={6} className={classes.scale}>
                            <Typography variant="body2">
                                Whether you are a large brand, just getting started,
                                or taking off right now, our application
                                architecture ensures pain-free growth and 
                                reliability.
                            </Typography>
                        </Grid>
                    </Grid>   
                </Grid>
            </Grid>
        </Grid>
    )
};
