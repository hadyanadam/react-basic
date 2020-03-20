import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from './pages/About'
import Development from "./pages/Development"

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <Link className="navbar-brand" to="/">
              Portofolio
            </Link>
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/home">
                Home
              </Link>
              <Link className="nav-item nav-link" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link" to="/development">
                Development
              </Link>
            </div>
          </nav>
          <Route path="/home" component={() => <Home />}></Route>
          <Route path="/about"component={() => <About />}></Route>
          <Route path="/development" component={() => <Development />}></Route>
        </div>
      </Router>
    )
  }
}

export default App