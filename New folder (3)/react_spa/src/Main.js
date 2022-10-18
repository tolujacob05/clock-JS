import React from "react"
import {
    Route,
    Routes,
    NavLink,
    HashRouter
} from "react-router-dom"
import Home from "./Home"
import Stuff from "./Stuff"
import Contact from "./Contact"

const Main = () => {
    return (
        <HashRouter>
            <div>
               <h1>Simple SPA</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Routes>
                       <Route exact path= "/" element={<Home />}></Route>
                       <Route path= "/stuff" element={<Stuff />}></Route>
                       <Route path= "/contact" element={<Contact />}></Route>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default Main;