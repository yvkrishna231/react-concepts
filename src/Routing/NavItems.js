import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
export default class NavItems extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                    <NavLink to='/' className='navbar-brand'>logo</NavLink>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact
                                activeClassName='highlight'
                                to='/'
                                className='nav-link'>
                                Routing
                              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='highlight'
                                to='/error'
                                className='nav-link'>
                                ErrorApp
                             </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='highlight'
                                to='/hoc'
                                className='nav-link'>
                                HocApp
                             </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                activeClassName='highlight'
                                to='/parent'
                                className='nav-link'>
                                validations
                             </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
