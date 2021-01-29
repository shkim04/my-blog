import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css';
import ClickNavBar from './clickEventHandlerForNavBar';

export default class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            infoOpen: false,
            projectOpen: false,
        }
    }
    componentDidMount() {
        if(this.state.infoOpen) { document.getElementById('info').focus() };
        if(this.state.projectOpen) { document.getElementById('project').focus() };
    }
    handleInfoNav = () => {
        this.setState(prevState => ({
            infoOpen: !prevState.infoOpen
        }))
    }

    handleProjectNav = () => {
        this.setState(prevState => ({
            projectOpen: !prevState.projectOpen
        }))
    }
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
                    <div className='sidenav-nested-bar-container' id='info' tabIndex='-1' onClick={this.handleInfoNav}>
                        <div className='nav-bar-title-container'>
                            <i className="fas fa-info-circle"></i>
                            <span className='nav-bar-title'>Info</span>
                        </div>
                        {
                            this.state.infoOpen &&
                            <ClickNavBar className='sidenav-nested-bar clearfix' onClick={this.handleInfoNav}>
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
                            </ClickNavBar>
                        }
                    </div>
                    <div className='sidenav-nested-bar-container' id='project' tabIndex='-1' onClick={this.handleProjectNav}>
                        <div className='nav-bar-title-container'>
                            <i className="fas fa-project-diagram"></i>
                            <span className='nav-bar-title'>Project</span>
                        </div>
                        {
                            this.state.projectOpen &&
                            <ClickNavBar className='sidenav-nested-bar clearfix' onClick={this.handleProjectNav}>
                                <div className='nav-bar-list'>
                                    <NavLink to='/beginning' activeClassName='active'>   
                                        Beginning
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
                            </ClickNavBar>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

