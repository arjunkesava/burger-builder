import React from 'react';

import classes from './SideDrawer.css';
import Logo from '../../Logo/Logo';
import Navigation from '../NavigationItems/NavigationItems';

const SideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <Navigation />  
            </nav>
        </div>
    )
};

export default SideDrawer;
