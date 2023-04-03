import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSLice"
import ProfileScreen from "../src/screens/ProfileScreen"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // logged in
        // console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        // logged out
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch])
  return (
    <Router>
      <div className="app">
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path='/profile' element={<ProfileScreen />} />
            <Route exact path='/' element={<HomeScreen />} />
          </Routes>
        )
        }

      </div>
    </Router>
  );
}

export default App;
