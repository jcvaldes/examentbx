import React from 'react'
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
  <HashRouter>
    <Switch>
      <Route path='/products' component={Product} />
      <Route path='/about' component={About} />
      <Redirect from='*' to='/products'/>
    </Switch>
  </HashRouter>
)