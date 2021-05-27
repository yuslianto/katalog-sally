import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './MainApp.scss'
import {MainBg} from '../../assets'
import { Header } from '../../components'
import CreateProduct from '../CreateProduct'
import Home from '../Home'
import DetailProduct from '../DetailProduct'

const MainApp = () => {
  return (
    <div className="main-page">
      <Header/>
      <Router>
        <Switch>
          <Route path="/CreateProduct">
            <CreateProduct/>
          </Route>
          <Route path="/DetailProduct">
            <DetailProduct/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      <p> Content </p>
      <p> Footer </p>
    </div>
  )
}

export default MainApp
