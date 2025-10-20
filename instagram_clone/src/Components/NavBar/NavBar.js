import React, { Component } from 'react';
import './NavBar.css';
import { Grid } from '@mui/material';
import imgLogo from '../../Images/Instagram-Logo.png';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import RecommendIcon from '@mui/icons-material/Recommend';
import Avatar from '@mui/material/Avatar';
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
                <Grid container spacing={30} alignItems="center">
                    <Grid item xs={2}>
                        </Grid>
                    <Grid item xs={3}>
                       <img src={imgLogo} alt="Instagram Logo" width="105px" />
                    </Grid>
                    <Grid item xs={3}>
                        <div className="navbar_search">
                            <input type="text" placeholder="Search" />
                        </div>
                    </Grid>
                    <Grid item xs={3} style={{display: 'flex', justifyContent: 'space-around'}}>
                       <div className="navbar_icons">
                            <HomeIcon fontSize="large" />
                            <MessageIcon fontSize="large" />
                            <FindInPageIcon fontSize="large" />
                            <RecommendIcon fontSize="large" />
                            <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />

                           
                       </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default NavBar;