import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import MyPost from './components/MyPost/MyPost';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myPost">
              <MyPost/>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
