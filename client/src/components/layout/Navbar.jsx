import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="#">Books</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to={"/"}>Home <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={"/add-book"}>Add New</Link>
                    </li>
                </ul>
            </div>
      </div>
    </nav>
  )
}

export default Navbar