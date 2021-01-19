import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';
import BlogLogo from '../assets/site_logo.png';

export default class Header extends Component {
    render() {
        return (
            <header className='header-container'>
               <div className='description'>
                  <div className='site-name-container'>
                     <NavLink to='/'><img className='site-name' src={BlogLogo} alt='home' /></NavLink>
                  </div>
                  <div className='nav-bar'>
                     <div className='menu'>
                        <button className='menu-btn'>
                           <i className="fas fa-bars"></i>
                        </button>
                        <div className='menu-content' id='menu-dropdown'>
                           <NavLink to='/about_blog' activeClassName='active'>About Blog</NavLink>
                           <a href='http://www.freecodecamp.org' alt='mentor-webpage'>freecodecamp.org</a>
                        </div>
                     </div>
                  </div>
               </div>
            </header>
        )
    }
}
