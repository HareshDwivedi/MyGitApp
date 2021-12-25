import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//react -router
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom';

//toast
import { ToastContainer,toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

//firebase 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

//components
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import PageNotFound from './pages/PageNotFound';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import FirebaseConfig from './config/FirebaseConfig';

//init firebase

firebase.initializeApp(FirebaseConfig);
const App = () => {

  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
