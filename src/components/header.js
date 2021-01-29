import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './header.css';
import BlogLogo from '../assets/site_logo.png';
import ClickNavBar from './clickEventHandlerForNavBar';

export default class Header extends Component {
   constructor(props) {
      super(props);
      
      this.state = {
         menuOpen: false
      }
   }
   
   handleTopNavDropDown = () => {
      this.setState(prevState => ({
         menuOpen: !prevState.menuOpen
      }))
   }
   render() {
      return (
         <header className='header-container'>
            <div className='description'>
               <div className='site-name-container'>
                  <NavLink to='/'><img className='site-name' src={BlogLogo} alt='home' /></NavLink>
               </div>
               <div className='top-nav-bar' onClick={this.handleTopNavDropDown}>
                  <div className='menu'>
                     <button className='menu-btn'>
                        <i className="fas fa-bars"></i>
                     </button>
                     {
                        this.state.menuOpen &&
                        <ClickNavBar className='menu-content' onClick={this.handleTopNavDropDown}>
                           <NavLink to='/about_blog'>About Blog</NavLink>
                           <a href='http://www.freecodecamp.org' alt='mentor-website'>freecodecamp.org</a>
                        </ClickNavBar>
                     }
                  </div>
               </div>
            </div>
         </header>
      )
   }
}
