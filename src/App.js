import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link  } from 'react-router-dom';
import Home from './Home/Home';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>  
        </header>

        <div className="content-body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/portfolio" component={Portfolio} />
              <Route exact path="/skills" component={Skills} />
            </Switch>

            
          </div>

          <footer>
            <div>
              &copy; Rajeev Ranjan
            </div>
          </footer>
    </div>
    </Router>
  );
}

export default App;
