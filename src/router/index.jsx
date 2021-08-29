import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";
import List from "../views/list/list1";
import Detail from "../views/list/detail";
import Login from "../views/login/Login";
import NoaMatch from "../views/404/404";
import App from "../App";
import Home from "../home";

class Routers extends React.Component {
  render() {
    return (
      <Router>
        {/* <App> */}
        <Switch>
          <Route path='/' exact render={()=> (
                <Redirect to='/login'/>
          )}/>
          <Route path="/login" exact component={Login}></Route>
          {/* <Route path="/detail" component={Detail}></Route> */}
          <Route
            // path="/"
            
            render={() => (
              <Home>
                <Route path="/index" exact component={List}></Route>
                <Route path="/index/detail/:id/:type" component={Detail}></Route>
              </Home>
            )}
          ></Route>
          <Route component={NoaMatch}/>
          {/* <Redirect to="/" /> */}
        </Switch>
        {/* </App> */}
      </Router>
    );
  }
}

export default Routers;

// const routes = {
//   path: "/",
//   component: App,
//   childRoutes: [
//     { path: "about", component: List },
//     { path: "inbox", component: Inbox },
//   ],
// };

// export default routes;
