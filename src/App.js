import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';
import { AuthState } from './login/authState';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const [authState, setAuthState] = React.useState(AuthState.Unknown);

  React.useEffect(() => {
    if (userName) {
      fetch(`/api/user/${userName}`)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((user) => {
          const state = user?.authenticated ? AuthState.Authenticated : AuthState.Unauthenticated;
          setAuthState(state);
        });
    } else {
      setAuthState(AuthState.Unauthenticated);
    }
  }, [userName]);


  return (
    <BrowserRouter>
    <div class="top bg-dark text-light">
        <header class="container-fluid">
            <nav class="navbar fixed-top navbar-dark">
                <div class="navbar-brand">
                  Simon<sup>&reg;</sup>
                </div>
                <menu>
                    <li class="nav-item">
                        <NavLink class="nav-link" to="">
                          Home
                        </NavLink>
                    </li>
                    {authState === AuthState.Authenticated && (
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='play'>
                          Play
                        </NavLink>
                      </li>
                    )}
                    {authState === AuthState.Authenticated && (
                      <li className='nav-item'>
                        <NavLink className='nav-link' to='scores'>
                          Scores
                        </NavLink>
                      </li>
                    )}
                    <li class="nav-item">
                        <NavLink class="nav-link" to="about">
                          About
                        </NavLink>
                    </li>
                </menu>
            </nav>
        </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
          <Route path='/play' element={<Play userName={userName} />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer class="bg-dark text-dark text-muted">
            <div class="container-fluid">
                <span class="text-reset">Author Name</span>
                <a class="text-reset" href="https://github.com/jminyoon/simon">Jeffry</a>
            </div>
        </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
