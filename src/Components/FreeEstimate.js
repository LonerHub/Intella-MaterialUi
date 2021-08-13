import React, {useState} from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { cloneDeep } from "lodash";
import { IconButton } from "@material-ui/core";
import { Dialog, DialogContent, TextField } from "@material-ui/core";

import Revolution from "../images/Revolution.jpg";
import computer from "../images/computer.png";
import cubes from "../images/cubes.png";
import mobilephone from "../images/mobilephone.png";
import info from "../images/info.png";
import Interactive from "../images/Interactive.png";
import world from "../images/world.png";
import androidlogo from "../images/androidlogo.png";
import applelogo from "../images/applelogo.png";
import photocamera from "../images/photocamera.png";
import locationpointer from "../images/locationpointer.png";

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DoneAllIcon from '@material-ui/icons/DoneAll';

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
    image: {
      width: "12em",
      margin: "auto",
      [theme.breakpoints.down("sm")]: {
        width: "9em"
      }
    },
    Icon: {
        fontSize: "10em",
        color: theme.palette.secondary.main,
        [theme.breakpoints.down("sm")]: {
          fontSize: "7em"
        }
    },
    arrow: {
        fontSize: "2em",
        color: theme.palette.secondary.main
    },
    arrowDisabled: {
      color: theme.palette.common.grey,
      fontSize: "2em"
    },
    estimate: {
      ...theme.typography.estimate,
      borderRadius: 50
    },
    arrowContainer: {
      width: "35%",
      margin: "auto",
      paddingTop: "1.3em",
      [theme.breakpoints.down("sm")]: {
        width: "50%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "80%"
      }
    },
    message: {
      border: `2px solid ${theme.palette.secondary.main}`,
      margin: "2rem 0em",
      borderRadius: 10
    },
    cost: {
      fontFamily: "Raleway",
      fontSize: "1.3rem",
      fontWeight: "700",
      color: theme.palette.primary.main
    },
    value: {
      textAlign: "center",
      marginBottom: "0.7em"
    }
}));

const defaultQuestions = [
  {
    id :1,
    title: "Which service are you interested in ?",
    active: true,
    options: [
        {
            id: 1,
            title: "Custom Software Development",
            subtitle: null,
            icon: cubes,
            selected: false,
            cost: 0
        },
        {
            id: 2,
            title: "Ios/Android App Development",
            subtitle: null,
            icon: mobilephone,
            selected: false,
            cost: 0
        },
        {
            id: 3,
            title: "Website Development",
            subtitle: null,
            icon: computer,
            selected: false,
            cost: 0
        }
    ]
  }

];

const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: computer,
        iconAlt: "computer outline",
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: applelogo,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: androidlogo,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: photocamera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: locationpointer,
        iconAlt: "gps pin",
        selected: false,
        cost: 25
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: computer,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: computer,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: computer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: computer,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: computer,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: computer,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: computer,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: computer,
        iconAlt: "person outline",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: computer,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: computer,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5
      }
    ],
    active: false
  }
];


const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: Interactive,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: world,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250
      }
    ],
    active: true
  }
];

export default function FreeEstimate(props) {
    const classes = useStyles();

    const [questions, setQuestions] = useState(defaultQuestions);
    const [openDialog,setOpenDialog] = useState(false);

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [emailHelper, setEmailHelper] = useState("");
    const [phone,setPhone] = useState("");
    const [phoneHelper, setPhoneHelper] = useState("");
    const [message,setMessage] = useState("");

    const [total,setTotal] = useState(0);

    const [service,setService] = useState([]);
    const [platforms,setPlatforms] = useState([]);
    const [features,setFeatures] = useState([]);
    const [customFeatures,setCustomFeatures] = useState("");
    const [users, setUsers] = useState(""); 

    const nextQuestion = () => {
      const newQuestions = cloneDeep(questions);
      const currentlyActive = newQuestions.filter(question => question.active);
      const activeIndex = currentlyActive[0].id - 1;
      const nextIndex = activeIndex + 1;

      newQuestions[activeIndex] = {...currentlyActive[0], active: false};
      newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};

      setQuestions(newQuestions);
    };

    const prevQuestion = () =>{
      const newQuestions = cloneDeep(questions);
      const currentlyActive = newQuestions.filter(question => question.active);
      const activeIndex = currentlyActive[0].id - 1;
      const nextIndex = activeIndex - 1;

      newQuestions[activeIndex] = {...currentlyActive[0], active: false};
      newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true};

      setQuestions(newQuestions);
    }

    const prevDisabled = () =>{
      const currentlyActive = questions.filter(question =>question.active);
      if(currentlyActive[0].id === 1){
        return true;
      } else {
        return false;
      }
    }

    const nextDisabled = () =>{
      const currentlyActive = questions.filter(question =>question.active);
      if(currentlyActive[0].id === questions[questions.length-1].id){
        return true;
      } else {
        return false;
      }
    }

    const handleSelect = (id) =>{
      const newQuestions = cloneDeep(questions);
      const currentlyActive = newQuestions.filter(question => question.active);
      const activeIndex = currentlyActive[0].id - 1;

      const newSelected = newQuestions[activeIndex].options[id-1];
      const previousSelected = currentlyActive[0].options.filter(option => option.selected);

      switch(currentlyActive[0].subtitle) {
        case "Select one":
          if(previousSelected[0]) {
            previousSelected[0].selected = !previousSelected[0].selected;
          }
          newSelected.selected = !newSelected.selected;
          break;
          default:
            newSelected.selected = !newSelected.selected;
            break;
      }

      switch(newSelected.title) {
        case "Custom Software Development":
          setQuestions(softwareQuestions);
          setService(newSelected.title);
          break;
        case "Ios/Android App Development":
          setQuestions(softwareQuestions);
          setService(newSelected.title);
          break;
        case "Website Development":
          setQuestions(websiteQuestions);
          setService(newSelected.title);
          break;
        default:
          setQuestions(newQuestions);
          break;
      }
    }

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

  const getTotal = () => {
    let cost=0;
    const selections = questions.map(question => question.options.filter(option => option.selected)).filter(question => question.length > 0);

    selections.map(options => options.map(option => (cost+=option.cost)));

    if(questions.length >2) {
      const userCost = questions.filter(question => question.title === "How many users do you expect?").map(question => question.options.filter(option => option.selected))[0][0].cost;
      cost -= userCost;
      cost *= userCost;
    }
    setTotal(cost);
  };

  const getPlatforms = () =>{
    let newPlatforms = [];
    let newFeatures = [];
    let newFeatures1 = [];
    let newCustomFeatures;
    let newUsers;

    if(questions.length > 2){
      newPlatforms = questions.filter(question => question.title=== "Which platforms do you need supported?")[0].options.filter(option => option.selected).map(option => option.title);

      newFeatures = questions.filter(question => question.title=== "Which features do you expect to use?")[0].options.filter(option => option.selected).map(option => option.title);

      newFeatures1= questions.filter(question => question.title=== "Which features do you expect to use?")[1].options.filter(option => option.selected).map(option => option.title);

      newCustomFeatures = questions.filter(question => question.title=== "What type of custom features do you expect to need?")[0].options.filter(option => option.selected).map(option => option.title);

      newUsers = questions.filter(question => question.title=== "How many users do you expect?")[0].options.filter(option => option.selected).map(option => option.title);

    }
    setPlatforms(newPlatforms);
    setFeatures([...newFeatures,...newFeatures1]);
    setCustomFeatures(newCustomFeatures);
    setUsers(newUsers);
  }

    return(
      <Grid container direction="column">
        {/* ----------------- Free Estimate Banner ----------------- */}
         <Grid item className={classes.heroContainer}>
            <Grid container justify= "center" alignItems="center">
              <Grid item >
                <Typography variant="h2" color="secondary">
                    Free Estimate
                  </Typography>
                </Grid>
              </Grid>
          </Grid>
          {/* ------------------- Default Questions ---------------------- */}
          <Grid item container className={classes.container} justify= "center">
            {questions.filter(question => question.active).map((question,index) => (
              <Grid item container direction="column" >
                <Grid item container direction="column" justify= "center" alignItems="center" 
                  spacing={3}>
                  <Grid item style={{paddingBottom: "0"}}>
                    <Typography variant = "h2">
                      {question.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" style={{paddingBottom: "1.2em"}}>
                      {question.subtitle}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item container justify= "center" alignItems="center" spacing={4}
                 style={{textAlign:"center"}}>
                  {question.options.map((option,index) => (
                  <Grid item container direction="column" md
                    onClick={() => handleSelect(option.id)}
                    component={Button} style={{display: "grid", textTransform: "none",
                    backgroundColor: option.selected? "#e0e0e0": undefined}}
                  >
                      <Typography variant="h5" align="center">
                        {option.title}
                      </Typography>
                      <Typography variant= "subtitle2" align="center" style={{marginBottom: "0.5em"}}>
                        {option.subtitle}
                      </Typography>
                      <img src={option.icon} alt={option.iocnalt} className={classes.image}/>
                  </Grid>
                  ))}
                </Grid>
              </Grid>
              ))}
            <Grid item container justify="space-between" className={classes.arrowContainer}>
              <Grid item>
                <IconButton disabled={prevDisabled()} onClick={prevQuestion}>
                  <ArrowBackIcon className={prevDisabled()?classes.arrowDisabled:classes.arrow} />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton disabled={nextDisabled()} onClick={nextQuestion}>
                  <ArrowForwardIcon className={nextDisabled()?classes.arrowDisabled:classes.arrow} />
                </IconButton>
              </Grid>
            </Grid>
            <Grid item container justify="center" alignItems="center">
              <Grid item>
                <Button variant= "contained" color= "secondary" 
                  disabled={prevDisabled()===nextDisabled()? true: false}
                  onClick={()=>{setOpenDialog(true); getTotal(); getPlatforms();}}
                  className={classes.estimate}>
                  Get Estimate
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Dialog open={openDialog} onClose={()=>setOpenDialog(false)}
            style={{zIndex: 1302}}>
            <DialogContent>
              <Grid item container direction= "column">
                <Grid item>
                  <Typography variant="h2" align="center">
                    Estimate
                  </Typography>
                </Grid>
                <Grid item container direction="column">
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
                      <TextField id= "message" multiline rows={8}
                          className={classes.message}
                          InputProps={{disableUnderline: true}}
                          value={message} onChange={event => setMessage(event.target.value)} />
                  </Grid>
                  <Grid item>
                    <Typography variant= "body2">
                      Selected options: 
                    </Typography>
                    { service && <Typography variant= "body1">
                        <DoneAllIcon /> {service}
                      </Typography>
                    }
                  </Grid>
                  <Grid item>
                    { platforms.length > 0 && <Typography variant="body1">
                      <DoneAllIcon /> 
                        {platforms.map((platform) =>
                          <span> {platform}, </span>
                      )}</Typography>
                    }
                    { features.length > 0 && <Typography variant= "body1">
                      <DoneAllIcon />
                        {features.map(feature =>
                          <span> {feature}, </span>  
                        )}
                      </Typography>
                    }
                    { customFeatures.length > 0 && <Typography variant= "body1">
                      <DoneAllIcon />
                        {customFeatures.map(customFeature =>
                          <span> {customFeature} </span>  
                        )}
                      </Typography>
                    }
                    { users && <Typography variant= "body1">
                      <DoneAllIcon />
                        {users.map(user =>
                          <span> {user} users</span>  
                        )}
                      </Typography>
                    }
                  </Grid>
                  <Grid item className={classes.value}>
                    <Typography variant= "body2">
                      Estimated value <span className={classes.cost}>${total}</span>
                    </Typography>
                  </Grid>
                  <Grid item className={classes.value}>
                    <Button variant="contained" color="primary"
                      onClick={()=>setOpenDialog(false)}
                      style={{fontFamily: "Pacifico"}}>
                      Place Request
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
    )
};
