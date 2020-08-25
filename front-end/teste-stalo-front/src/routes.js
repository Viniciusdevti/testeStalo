  
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import PageHome from "./components/PageHome";




export default function  Routes() {
  return (
        <BrowserRouter>
      <Switch>
        <Route path="/" exact component={PageHome} />
        
      </Switch>
    </BrowserRouter>
  );
}