import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
// Import the AuthContext and AuthProvider
import { AuthContext, AuthProvider } from './components/common/AuthProvider';

function App() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const checkIfLoggedIn = async () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };

    checkIfLoggedIn();
  }, []);

  useEffect(() => {
    console.log("Log in succesful?" + isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/" element={<Home />} />
              {/* Add other routes here */}
            </>
          ) : (
            <Route path="/*" element={<Login />} />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
