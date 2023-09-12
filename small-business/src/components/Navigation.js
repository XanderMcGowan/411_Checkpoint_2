import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <AppBar position="relative">
            <Toolbar>                
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Midlothian Business Listings
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                    <Link to="/about">Login</Link>
                    </li>
                    
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation