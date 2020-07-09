import React from 'react'
import "./Navigation.css";
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        
            <Toolbar>
                <IconButton color="inherit">
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}/>
                <ul className="nav-list">
                    <li className="nav-list-item" style={{ textDecoration:'none'}}>
                        <Link to="/create">Create</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/play">Play</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/view">View</Link>
                    </li>
                    <li className="nav-list-item"
                        onClick={() => {
                            document.cookie = "loggedIn="
                            window.location.replace("/login")
                        }}>
                        Logout
                    </li>
                </ul>
            </Toolbar>
        
    )
}

export default Navigation