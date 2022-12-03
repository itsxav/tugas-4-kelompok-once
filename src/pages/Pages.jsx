import React from 'react'
import Header from '../components/header/Header'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from '../components/home/Home'
import Place from "../components/place/Place";
import  Food  from "../components/food/Food";
import Buttons from '../components/buttons/Buttons';


const Pages = () => {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/place' component={Place}/>
        <Route exact path='/food' component={Food}/>
        <Route exact path='/head' component={Buttons}/>
      </Switch>
    </Router>
  </>
  )
}

export default Pages