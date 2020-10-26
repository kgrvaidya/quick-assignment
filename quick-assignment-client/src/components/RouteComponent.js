import React from 'react'
import { Route, Switch , Redirect } from 'react-router-dom'
import UserComponent from './User';
import UserList from './UserList';

const Routing = () => {
    return (
    <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user/:id" component={UserComponent} />
        <Route path="*" render= {() => <Redirect to={{pathname: "/"}} />} />
  </Switch>
)}

export default Routing