import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AntButtonDemo } from './ant/Button'

function AntExample() {
    return (
      <AntButtonDemo/>
    //     {/* <Router>
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Switch>
    //           <Route path="/about" component={AntButtonDemo}/>
    //         </Switch>
    //       </Suspense>
    //     </Router> */}
    //   {/* </> */}
    )
}

export default AntExample;