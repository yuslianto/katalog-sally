import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './MainApp.scss'
import { Header, Footer } from '../../components'
import CreateProduct from '../CreateProduct'
import Home from '../Home'
import DetailProduct from '../DetailProduct'
import About from '../About'
import Testimoni from '../Testimoni'

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header/>
      <div className="content-wwrapper">
        <Router>
          <Switch>
            <Route path="/CreateProduct">
              <CreateProduct/>
            </Route>
            <Route path="/DetailProduct">
              <DetailProduct/>
            </Route>
            <Route path="/About">
              <About/>
            </Route>
            <Route path="/Testimone">
              <Testimoni/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer/>
    </div>
  )
}

export default MainApp
