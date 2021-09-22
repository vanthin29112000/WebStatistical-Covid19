import React from "react";
import { Route, Router, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "../../Layout/Grid-system/GridSystem.css";
import NavBar from "../../Layout/Navbar";
import CountryDetail from "../CoutryDetail";
import HomePage from "../HomePage";
import "./Webapp.css";
export const WebAPPCovid = () => {
   return (
      <BrowserRouter>
         <div className="webapp">
            <div className="navbar">
               <NavBar></NavBar>
            </div>
            <div className="highchart-container">
               <Switch>
                  <Route path="/" component={HomePage} exact></Route>
                  <Route
                     path="/countryDetail/:countryID"
                     component={CountryDetail}
                  ></Route>
               </Switch>
            </div>
         </div>
      </BrowserRouter>
   );
};
