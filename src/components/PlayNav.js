import React, { Component } from "react";
import "./PlayNav.css";
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

class PlayNav extends Component {
    render() {
        return (
            <Toolbar>
                <IconButton color="inherit">
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}/>
                <ul className="nav-list">
                    <li className="nav-P-item" style={{ textDecoration:'none'}}>
                        <Link to="/game">Test</Link>
                    </li>
                </ul>
            </Toolbar>
        );
    }
}

export default PlayNav;