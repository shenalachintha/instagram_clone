import React, { Component } from 'react';
import './Home.css';
import { Grid } from '@mui/material';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize state if needed
        };
    }
    render() {
        return (
            <div className="navbar_barContent">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={4}>
                        <div className="navbar_logo">Instagram</div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default NavBar;