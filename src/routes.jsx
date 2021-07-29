import List from "./views/list/list1";
const routes = {
    path: '/',
    component: App,
    childRoutes: [
      { path: 'about', component: List },
      { path: 'inbox', component: Inbox },
    ]
  }

  export default routes