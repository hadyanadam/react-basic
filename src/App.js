import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import RouterReact from "./app/router-react/App"
import ReactDasar from "./app/react-dasar/App"
import CrudReact from "./app/crud-react/App"

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
              <Link className="nav-item nav-link" to="/router-react">
                Router React
              </Link>
              <Link className="nav-item nav-link" to="/react-dasar">
                React Dasar
              </Link>
              <Link className="nav-item nav-link" to="/crud-react">
                CRUD React
              </Link>
            </div>
          </nav>
          <Route path="/router-react" component={() => <RouterReact />}></Route>
          <Route path="/react-dasar"component={() => <ReactDasar />}></Route>
          <Route path="/crud-react" component={() => <CrudReact />}></Route>
        </div>
      </Router>
    )
  }
}

export default App