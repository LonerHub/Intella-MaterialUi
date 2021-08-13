import React from "react";
import { AppBar,Toolbar,Button } from "@material-ui/core";
import { Tabs,Tab } from "@material-ui/core";
import { Menu,MenuItem } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { SwipeableDrawer,IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText } from "@material-ui/core";

import logo from "../../images/is_brand_logo.png";

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      });
}


const useStyles = makeStyles(theme =>({
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: {
      ...theme.mixins.toolbar,
      [theme.breakpoints.up("md")]: {
        marginBottom: "1em"
      },
      [theme.breakpoints.up("sm")]: {
          marginBottom: "0px"
      },
      [theme.breakpoints.down("sm")]: {
          marginBottom: "0em"
      }
    },
    tabsContainer: {
        marginLeft: "auto"
    },
    logoButton: {
        padding: "0px"
    },
    logo: {
        [theme.breakpoints.down("md")]: {
            height: "3em"
        }
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        margin: "0px 25px 0px 50px",
        borderRadius: "50px"
    },
    menu: {
        backgroundColor: theme.palette.common.black
    },
    menulist: {
        ...theme.typography.tab,
        opacity: 0.7,
        color: 'white',
        "&:hover": {
            opacity: 1,
            backgroundColor: theme.palette.secondary.main
        },
        "&:focus": {
            backgroundColor: theme.palette.secondary.main
        }
    },
    menuIconContainer: {
        marginLeft: "auto"
    },
    menuIcon: {
        color: "White",
        height: "40px",
        width: "40px",
    },
    drawer:{
        backgroundColor: theme.palette.primary.main
    },
    drawerItem: {
        ...theme.typography.tab,
        opacity: 0.7
    },
    drawerSelectedItem: {
        opacity: 1
    }
}))
  
const Header = (props) =>{
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [anchorEl,setAnchorEl] = React.useState(null);
    const [openMenu,setOpenMenu] = React.useState(false);
    const [openDrawer,setOpendrawer] = React.useState(false);
    
    // Tab Selection actions
    const handleChange = (e, newValue)=>{
        props.setValue(newValue);
    }
    // Menu handling actions
    const handleClick = (e)=>{
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    }
    const handleMenuItem = (e,i) =>{
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }
    const handleClose = (e)=>{
        setOpenMenu(false);
        setAnchorEl(null);
    }
        
    const menuItems = [ 
        {name: "Services", link: "/Services", activeIndex: 1, selectedIndex: 0},
        {name: "Custom Software Development ", link: "/Custom-Software", activeIndex: 1, selectedIndex: 1},
        {name: "Ios/Andriod Apps Development", link: "/Mobile-Apps", activeIndex: 1, selectedIndex: 2},
        {name: "website Development", link: "/Website", activeIndex: 1, selectedIndex: 3}
    ];
    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {name: "Services", link: "/services", activeIndex: 1, ariaOwns: anchorEl ? "Service-Menu": undefined,
        ariaPopup: anchorEl ? "true" : undefined, onMouse: event => handleClick(event)
        },
        {name: "The Revolution", link: "/The-Revolution", activeIndex: 2},
        {name: "About Us", link: "/About-us", activeIndex: 3},
        {name: "Contact US", link: "/Contact-Us", activeIndex: 4}
    ]
    React.useEffect(()=>{
        [...menuItems,...routes].forEach((route)=>{
            switch (window.location.pathname) {
                case `${route.link}`:
                    if(props.value!==route.activeIndex){
                        props.setValue(route.activeIndex)
                    }
                    if(route.selectedIndex && route.selectedIndex!==props.selectedIndex){
                        props.setSelectedIndex(route.selectedIndex)
                    }
                break;
                case "/Estimate":
                    props.setValue(5);
                break;
                default:
                break;
            }
        })
    },[props.value, menuItems, routes, props.selectedIndex, props]);

    const tabs = (
        <React.Fragment>
            <Tabs 
                value={props.value}
                onChange={handleChange}
                className={classes.tabsContainer}
            >{
                routes.map((route,index)=>(
                    <Tab 
                        key={route.activeIndex}
                        className={classes.tab} 
                        component={Link}
                        to={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.onMouse}
                    />
                ))
            }</Tabs>
            <Button 
                variant="contained"
                color="secondary"
                component={Link}
                to="/Estimate"
                onClick={()=>props.setValue(5)}
                className={classes.button}
            >
                Free Estimate
            </Button>
            <Menu
                id="Services-Menu"
                anchorEl={anchorEl}
                open={openMenu}
                MenuListProps={{onMouseLeave: handleClose}}
                classes={{paper: classes.menu}}
                style={{zIndex: 1302}}
            >{
                menuItems.map((item,i) =>{
                    return(
                        <MenuItem
                            key={item.link}
                            onClick={(event)=>{
                                handleMenuItem(event,i);
                                handleClose();
                                props.setValue(1)}}
                            component={Link}
                            to={item.link}
                            classes={{root: classes.menulist}}
                            selected={i===props.selectedIndex && props.value===1}
                            keepMounted
                        >
                            {item.name}
                        </MenuItem>
                    )
                })
            }</Menu>
        </React.Fragment>
    );
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer 
                classes={{paper: classes.drawer}}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer} 
                onClose={()=>setOpendrawer(false)}
                onOpen={()=>setOpendrawer(true)}
            >
                <div className={classes.toolbarMargin} />
                <List>
                    {routes.map(route=>(
                        <ListItem
                            key={route.name}
                            divider button component={Link} 
                            to={route.link} 
                            onClick={()=>{setOpendrawer(false); props.setValue(route.activeIndex)}}
                            selected={props.value===route.activeIndex}
                        >
                            <ListItemText
                                className={props.value===route.activeIndex?[classes.drawerItem,classes.drawerSelectedItem]:classes.drawerItem}
                            >
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem 
                        divider button component={Link} to="/Estimate" onClick={()=>{setOpendrawer(false); props.setValue(5)}} selected={props.value===5}>
                        <ListItemText 
                            className={props.value===5?[classes.drawerItem,classes.drawerSelectedItem]:classes.drawerItem}
                   
                        >
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton 
                onClick={()=>setOpendrawer(!openDrawer)}
                className={classes.menuIconContainer}
            >
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
        </React.Fragment>
    );
    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                    <Button 
                        component={Link} to="/" 
                        onClick={()=> props.setValue(0)}
                        className={classes.logoButton}
                    >
                        <img src={logo} alt="company log" className={classes.logo} />
                    </Button>
                        { matches ? drawer : tabs }
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    )
}

export default Header;