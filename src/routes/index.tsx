import React from 'react'
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { ChatPage } from '../pages/ChatPage/ChatPage';
import { Button } from '../components/atoms/Button/Button';
import {SCREENS} from './endpoints'
export const Routes: React.FC = () =>{
return(
  <BrowserRouter>
  <Switch>
    <Route path={SCREENS.SCREEN_LOGIN} exact>
    <LoginPage/>
    </Route>
    <Route path={SCREENS.SCREEN_CHATTY}>
    <ChatPage/>
    </Route>
    <Route path={SCREENS.SCREEN_MAIN}>
    <Link to='/login'>{<Button childrenProp='To Log In!'/>}</Link>
    </Route>
  </Switch>
  </BrowserRouter>
)
};