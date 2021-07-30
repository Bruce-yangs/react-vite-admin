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
import App from "../App";

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" exact component={Login}></Route>
          {/* <Route path="/detail" component={Detail}></Route> */}
          <Route path="/" exact render={() =>(
            <App>
              <Route path="/index"  component={List}></Route>
              <Route path="/index/detail"  component={Detail}></Route>
            </App>
          )}></Route>
        </App>
      </Router>
    )
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
