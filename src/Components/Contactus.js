import React from "react";
import { Grid,Button,Typography, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Revolution from "../images/Revolution.jpg";
import { TextField, Dialog, DialogContent } from "@material-ui/core";
import CallToAction from "./UI/CallToAction";

import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';

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
    Icon: {
        verticalAlign: "bottom",
        marginRight: "0.4rem"
    },
    message: {
        border: `2px solid ${theme.palette.secondary.main}`,
        margin: "2rem 0em",
        borderRadius: 10
    },
    sendButton: {
        ...theme.typography.estimate,
        marginBottom: '2em'
    }
}))

export default function Contactus(props) {
    const classes = useStyles();
    
    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [emailHelper, setEmailHelper] = React.useState("");
    const [phone,setPhone] = React.useState("");
    const [phoneHelper, setPhoneHelper] = React.useState("");
    const [message,setMessage] = React.useState("");
    const [openDialog, setOpenDialog] = React.useState(false);

    const Change = event =>{
        let valid;
        switch(event.target.id) {
            case "email":
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);
                if(!valid) {
                    setEmailHelper("Enter a valid email Id");
                }
                else {
                    setEmailHelper("");
                }
            break;
            case "phone":
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);
                if(!valid) {
                    setPhoneHelper("Enter a valid phone number");
                }
                else {
                    setPhoneHelper("");
                }
            break;
            default:
            break;
        }
    }
    return(
        <Grid container direction="column">
            <Grid item container>
                {/* ------Contact us Banner ------ */}
                <Grid item className={classes.heroContainer}>
                    <Grid container justify="center" alignItems="center">
                        <Grid item >
                            <Typography variant="h2" color="secondary">
                            Contact Us
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* ----------- Contact Form ----------- */}
            <Grid item container>
                <Grid item container direction="column" justify="center" alignItems="center" md={4} lg={4}>
                    <Grid item>
                        <Typography variant="h2">
                            Contact
                        </Typography>
                        <Typography variant="body1">
                            We're waiting...
                        </Typography>
                        <Typography variant= "body1">
                            <PhoneIcon className={classes.Icon}/>
                            <a href="tel:3333333333"
                                style={{textDecoration: "none", color: "inherit"}}    
                            >
                                +(333) 333 3333
                            </a>
                        </Typography>
                        <Typography variant="body1">
                            <EmailIcon className={classes.Icon} />
                            <a href="mailto:abcd@gmail.com"
                                style={{textDecoration: "none", color: "inherit"}}
                            >
                                abcd@gmail.com
                            </a>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField label="Name" id="name"
                            className={classes.input}
                            value={name} onChange={(event)=> setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                        <TextField label="Email" id="email"
                            helperText= {emailHelper} error ={emailHelper.length!==0}
                            value={email} onChange={Change} />
                    </Grid>
                    <Grid item>
                        <TextField label="Phone" id="phone"
                            helperText= {phoneHelper} error = {phoneHelper.length!==0}
                            value={phone} onChange={Change} />
                    </Grid>
                    <Grid item>
                        <TextField id="message" multiline rows={8}
                            className={classes.message}
                            InputProps={{disableUnderline: true}}
                            value={message} onChange={event => setMessage(event.target.value)} />
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={()=>setOpenDialog(true)}
                            variant="contained" color="secondary"
                            className={classes.sendButton}>
                            Send message
                            <TelegramIcon />
                        </Button>
                    </Grid>
                </Grid>
                {/* ------------- Call to action Section ------------------------ */}
                <Hidden smDown>
                    <Grid item container lg={8} md={8}>
                        <CallToAction setValue={props.setValue} setSelectedIndex={props.setSelectedIndex} />
                    </Grid>
                </Hidden>
            </Grid>
            <Grid item container direction="column" alignItems="center" justify= "center">
                <Dialog open={openDialog} onClose={()=>setOpenDialog(false)} style={{zIndex: "1302"}}>
                    <DialogContent>
                        <Grid item>
                            <Typography variant="h4">
                                Confirm Details 
                            </Typography>
                        </Grid>
                        <Grid item>
                            <TextField label="Name" id="name"
                                className={classes.input}
                                value={name} onChange={(event)=> setName(event.target.value)}/>
                        </Grid>
                        <Grid item>
                            <TextField label="Email" id="email"
                                helperText= {emailHelper} error ={emailHelper.length!==0}
                                value={email} onChange={Change} />
                        </Grid>
                        <Grid item>
                            <TextField label="Phone" id="phone"
                                helperText= {phoneHelper} error = {phoneHelper.length!==0}
                                value={phone} onChange={Change} />
                        </Grid>
                        <Grid item>
                            <TextField id="message" multiline rows={8}
                                className={classes.message}
                                InputProps={{disableUnderline: true}}
                                value={message} onChange={event => setMessage(event.target.value)} />
                        </Grid>
                        <Grid item style={{textAlign: "center"}}>
                            <Button
                                disabled ={name.length===0 || message.length===0 ||
                                emailHelper.length!==0 || phoneHelper.length!==0}
                                onClick={()=>setOpenDialog(false)}
                                variant="contained" color="secondary"
                                className={classes.sendButton}>
                                Confirm
                            </Button>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        </Grid>
    )
};
