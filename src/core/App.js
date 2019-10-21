import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { CardList, Character } from '../pages'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CardList} />
        <Route path="/char" exact component={Character} />
      </Switch>
    </Router>
  )
}

export default App
