
import Jumbotron from "/src/site/components/Jumbotron.jsx";
import InfoSection from "./src/site/components/InfoSection";
import Nav from "./src/site/components/Nav";
import Overview from "./src/site/components/Overview";
import { Component } from "react";



function App() {
let Component
  switch (window.location.pathname) {

    case "/":
      break
       case "/Overview":
       //  Component = <Overview />
      // break
     case "/Jumbotron":
      Component = <Jumbotron />
      break
      // case "/InfoSection":
        // Component = <InfoSection />
      break

  }

  return (
    <div className = "App">
     <Nav />
     <Jumbotron /> 
     {/*   <Overview /> />*/}
     {/* <InfoSection />*/}
    {/* <Jumbotron />  <Sensors />  */} 
      {Component}
    </div>
  );
}

export default App;
