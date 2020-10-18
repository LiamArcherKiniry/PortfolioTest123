import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import './App.css';
import Navbar from './Components/Navbar'

import About from "./pages/about";
import Home from "./pages/home";
import WorkOne from "./pages/workOne";
import Muster from "./pages/muster";
import MyConnect from "./pages/myConnect";
import Story from "./pages/story"
const Links = () => (
  <>
    {/* <div className='Navigation'>
      <Link to="/">Home</Link>
      <Link to="About">About</Link>
    </div> 
   */}
   <Navbar />
  </>
);


 

 
export default function App() {
  return (
    <BrowserRouter>
      <Links />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToTopFromBottom"
              exitAnimation="scaleDownCenter"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/workOne" component={WorkOne} />
                <Route exact path="/muster" component={Muster} />
                <Route exact path="/myConnect" component={MyConnect} />
                <Route exact path="/story" component={Story} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}
