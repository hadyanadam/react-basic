import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Portofolio
            </Link>
            <div className="navbar-nav">
              <Link className="nav-item nav-link" to="/">
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
          <Route path="/" exact component={() => <h4>Home</h4>}></Route>
          <Route path="/about"component={() => <h4>About</h4>}></Route>
          <Route path="/development" component={() => <h4>Development</h4>}></Route>
        </div>
      </Router>
    )
  }
}

export default App