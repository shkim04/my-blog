import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';

export default class NavBar extends Component {
   
    render() {    
        return (
            <div id='nav-bar-container' style={{bottom: this.props.bottom}}>
                <div className='sidenav-bar clearfix'>
                    <div className='sidenav-nested-bar-container'>
                        <div className='nav-bar-title-container'>
                            <NavLink to='/'>
                                <i className="fas fa-home"></i>
                                <span className='nav-bar-title'>Home</span>
                            </NavLink>
                        </div>
                    </div>
                    <div className='sidenav-nested-bar-container'>
                        <div className='nav-bar-title-container'>
                            <i className="fas fa-info-circle"></i>
                            <span className='nav-bar-title'>Info</span>
                        </div>
                        <div className='sidenav-nested-bar clearfix'>
                            <div className='nav-bar-list'>
                                <NavLink to='/about_me' activeClassName='active'>
                                    About Me
                                </NavLink>
                            </div>
                            <div className='nav-bar-list'>
                                <NavLink to='/goal' activeClassName='active'>
                                    Goal
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='sidenav-nested-bar-container'>
                        <div className='nav-bar-title-container'>
                            <i className="fas fa-project-diagram"></i>
                            <span className='nav-bar-title'>Project</span>
                        </div>
                        <div className='sidenav-nested-bar clearfix'>
                            <div className='nav-bar-list'>
                                <NavLink to='/beginning' activeClassName='active'>   
                                    Begining
                                </NavLink>
                            </div>
                            <div className='nav-bar-list'>
                                <NavLink to='/trips_tracker' activeClassName='active'>
                                    Trip Tracker
                                </NavLink>
                            </div>
                            <div className='nav-bar-list'>
                                <NavLink to='/addition_practice' activeClassName='active'>
                                    Addition Practice
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
