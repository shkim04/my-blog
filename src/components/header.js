import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';
import BlogLogo from '../assets/site_logo.png';

export default class Header extends Component {
   handleDropDown = () => {
      let dropDown = document.getElementById('menu-dropdown');
      if(dropDown.className === 'top-nav-bar') {
         dropDown.className += ' responsive';
      }
      else {
         dropDown.className = 'top-nav-bar';
      }
   }
   render() {
      return (
         <header className='header-container'>
            <div className='description'>
               <div className='site-name-container'>
                  <NavLink to='/'><img className='site-name' src={BlogLogo} alt='home' /></NavLink>
               </div>
               <div className='top-nav-bar'  id='menu-dropdown' onClick={this.handleDropDown}>
                  <div className='menu'>
                     <button className='menu-btn'>
                        <i className="fas fa-bars"></i>
                     </button>
                     <div className='menu-content'>
                        <NavLink to='/about_blog'>About Blog</NavLink>
                        <a href='http://www.freecodecamp.org' alt='mentor-website'>freecodecamp.org</a>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      )
   }
}
