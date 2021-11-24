import { AntButtonDemo } from './example/ant/Button'
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Link } from 'react-router-dom';
import AntExample from './example/AntExample'
import TopNav from './components/Navigation';
import { Home } from './components/Home';
import "antd/dist/antd.css";
import AppRoutes from './routes';
import { Greetings } from './components/Greetings';

export function App() {
  return (
    <>
      {/* // 导航实现 */}
      {/* <TopNav Routes={AppRoutes}/> */}
      {/* <Home/> */}
      {/* <NavLink to='/' component={null}></NavLink> */}
      {/* <Link to='/Example/Ant'>HHHHH</Link> */}
      {/* {
      AppRoutes.map((route, index) => {
              const key = index + 1;
              return <Link to={route.path}>{route.name}</Link>                
            })
      } */}
      {/* <Link to='/'>'主页'</Link>       */}
      <Suspense fallback={<div>Loading...</div>}>
      <Link to='/Hello'>'你好'</Link>      
      <Link to='/Example/Ant'>'Antd样例'</Link>
      <Switch>
        {/* { AppRoutes.map((route, index)=>{
            return <Route key={ index+1 } path={route.path} component={route.component}> </Route>            
        })} */}
        {/* <Route key={ 2 } path={'/Hello'} element={<Greetings/>}> </Route>
        <Route key={ 3 } path={'/Example/Ant'} element={<AntExample/>}> </Route>
        <Route key={ 1 } exact path={'/'} element={null}> </Route> */}

        <Route key={ 2 } path={'/Hello'} component={Greetings}/>
        <Route key={ 3 } path={'/Example/Ant'} component={AntExample}/>
        {/* <Route key={ 1 } exact path={'/'} component={null}> </Route> */}
      </Switch>
      </Suspense>
    </>
  )
}