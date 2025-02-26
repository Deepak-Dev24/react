import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 ">
        <div className={`container-fluid p-2 navbar-${(props.mode)}  bg-${(props.mode)}` }>
          <a className="navbar-brand " href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/about">About</Link>
              </li>
            </ul>
            <div className="form-check form-switch">
              <input className="form-check-input " type="checkbox" onClick={()=>props.toggleMode(null)} role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode=='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode=='dark'?'Light':'Dark'} Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
