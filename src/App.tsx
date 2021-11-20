import { AntButtonDemo } from './example/ant/Button'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import AntExample from './example/AntExample'

export function App() {
  return (
    <>
      {/* // 导航实现 */}
      <NavLink to="/Example">样例</NavLink>
      <Link to="/">首页</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/Example" component={AntExample}/>
        </Switch>
      </Suspense>
    </>
  )
}