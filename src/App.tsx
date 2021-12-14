import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, Outlet } from 'react-router-dom';
import "antd/dist/antd.css";
import AppRoutes from './routes';
import { Greetings } from './components/Greetings';
import AntExample from './example/AntExample'

export function App() {
  return (
    <>
      {/* // 导航实现 */}
      {/* <TopNav Routes={AppRoutes}/> */}
      {/* <Home/> */}
      <Suspense fallback={<div>Loading...</div>}>
      {/* <Link to='/HelloWorld'>'你好'</Link>      
      <Link to='/Example/Ant'>'Antd样例'</Link> */}

      {
      AppRoutes.map((route, index) => {
              return <Link to={route.path}>{route.name}</Link>                
            })
      }
      {/* <Link to='/HelloWorld'>'Greetings'</Link>
      <Link to='/Example/Ant'>'Antd样例'</Link> */}

      <Routes>
        { AppRoutes.map((route, index)=>{
            return <Route key={ index+1 } path={route.path} element={<>
              {route.element}
            </>} > </Route>
        })}

        {/* <Route key={ 2 } path={'/HelloWorld'} element={Greetings()}/>
        <Route key={ 3 } path={'/Example/Ant'} element={AntExample()}/> */}
      </Routes>
      <Outlet/>
      </Suspense>
    </>
  )
}