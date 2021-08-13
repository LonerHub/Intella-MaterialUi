import React from "react";
import Header from "./UI/Header";
import Footer from "./UI/Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./UI/Theme";
import { BrowserRouter,Route, Switch } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import TheRevolution from "./TheRevolution";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import CustomSoftware from "./CustomSoftware";
import MobileApps from "./MobileApps";
import Website from "./Website";
import FreeEstimate from "./FreeEstimate";


function App() {
  const [selectedIndex,setSelectedIndex] = React.useState(0);
  const [value,setValue] = React.useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path="/Services" render={(props)=> <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
            <Route exact path="/Custom-Software" component={CustomSoftware}/>
            <Route exact path="/Mobile-Apps" component={MobileApps}/>
            <Route exact path="/Website" component={Website} />
          <Route exact path="/The-Revolution" component={TheRevolution} />
          <Route exact path="/About-us" component={Aboutus} />
          <Route exact path="/Contact-Us" render={(props) => <Contactus {...props} setValue={setValue}/>} />
          <Route exact path="/Estimate" component={FreeEstimate} />
        </Switch>
        <Footer
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
