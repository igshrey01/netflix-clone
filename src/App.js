import React,{useEffect} from 'react';
import './App.css';
import Login from './Screens/Login.js'
import Home from './Screens/Home.js'
import {auth} from './firebase.js'
import ProfileScreen from './Screens/ProfileScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import {logout,login,selectUser} from './features/userSlice'
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      
      <Router>
        {
          !user ? (
            <Login/>
          ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
          )
        }
        
      </Router>
    </div>
  );
}

export default App;
