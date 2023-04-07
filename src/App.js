import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Login } from './login/login';
import { Play } from './play/play';
import { Scores } from './scores/scores';
import { About } from './about/about';

function App() {
  return (
    <div class="top bg-dark text-light">
        <header class="container-fluid">
            <nav class="navbar fixed-top navbar-dark">
                <div class="navbar-brand">
                  Simon<sup>&reg;</sup>
                </div>
                <menu>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                          Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="play.html">
                          Play
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="scores.html">
                          Scores
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">
                          About
                        </a>
                    </li>
                </menu>
            </nav>
        </header>

        <Login />

        <footer class="bg-dark text-dark text-muted">
            <div class="container-fluid">
                <span class="text-reset">Author Name</span>
                <a class="text-reset" href="https://github.com/jminyoon/simon">Jeffry</a>
            </div>
        </footer>
    </div>
  );
}

export default App;
