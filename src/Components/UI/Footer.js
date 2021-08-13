import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Grid, Hidden, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import logo from "../../images/is_brand_logo.png";

const useStyles = makeStyles(theme=>({
    footer: {
        width: "100%",
        height: "10em",
        paddingTop: "50px",
        backgroundColor: theme.palette.common.black,
        [theme.breakpoints.down("sm")]: {
            height: "7em",
            paddingTop: "1em"
        }
    },
    gridItem: {
        ...theme.typography.tab,
        color: "white",
        textDecoration: "none",
        "&:hover": {
            color: theme.palette.secondary.main
        },
        "&:focus": {
            color: theme.palette.secondary.main
        }
    },
    logo: {
        height: "4em",
        paddingBottom: "2em",
        [theme.breakpoints.down("sm")]:{
            height: "3em",
            paddingBottom: "0.5em"
        }
    },
    socialIcon: {
        color: "white",
        fontSize: "3em",
        [theme.breakpoints.down("sm")]: {
            fontSize: "3em"
        },
        "&:hover": {
            color: theme.palette.secondary.main
        }
    },
    footerBelow: {
        paddingTop: "0.5em",
        backgroundColor: theme.palette.primary.main,
        borderTop: `1px solid ${theme.palette.common.grey}`
    }
}));


export default function Footer(props){
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <Grid container justify="space-evenly">
                <Hidden smDown>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>props.setValue(0)} 
                                component={Link} to="/"
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>{props.setValue(1); props.setSelectedIndex(0)}}
                                component={Link} to="/Services"
                            >
                                Services
                            </Grid>
                            <Grid item
                                className={classes.gridItem}
                                onClick={()=>{props.setValue(1); props.setSelectedIndex(1)}}
                                component={Link} to="/Custom-Software"
                            >
                                Custom Software Development
                            </Grid>
                            <Grid item
                                className={classes.gridItem}
                                onClick={()=>{props.setValue(1); props.setSelectedIndex(2)}}
                                component={Link} to="/Mobile-Apps"
                            >
                                Ios/Andriod Apps Development
                            </Grid>
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>{props.setValue(1); props.setSelectedIndex(3)}}
                                component={Link} to="/Website"
                            >
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" spacing={2}>
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>props.setValue(2)}
                                component={Link} to="/The-Revolution"
                            >
                                The Revolution
                            </Grid>
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>props.setValue(3)}
                                component={Link} to="/About-us"
                            >
                                About Us
                            </Grid>
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>props.setValue(4)}
                                component={Link} to="/Contact-Us"
                            >
                                Contact Us
                            </Grid>
                            <Grid item 
                                className={classes.gridItem}
                                onClick={()=>props.setValue(5)}
                                component={Link} to="/Estimate"
                            >
                                Free Estimate
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item>
                    <Grid container direction="column" spacing={4}>
                        <Grid item>
                            <Grid container justify="space-evenly">
                                <Grid item
                                    component={"a"}
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FacebookIcon className={classes.socialIcon}/>
                                </Grid>
                                <Grid item
                                    component={"a"}
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <TwitterIcon className={classes.socialIcon} />
                                </Grid>
                                <Grid item
                                    component={"a"}
                                    href="https://www.linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <LinkedInIcon className={classes.socialIcon} />
                                </Grid>
                            </Grid>
                            <Button 
                                onClick={()=>props.setValue(0)}
                                component={Link} to="/">
                                <img src={logo} alt="Intellasphere logo" className={classes.logo}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justify="center" className={classes.footerBelow} >
                <Grid item>
                    <Typography variant="subtitle1">
                        © IntellaSphere 2021
                    </Typography>
                </Grid>
            </Grid>
        </footer>
    )
}