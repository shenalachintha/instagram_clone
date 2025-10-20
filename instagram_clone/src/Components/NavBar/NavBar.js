import React, { Component } from 'react';
import './NavBar.css';
import Grid from '@mui/material/Grid';
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
                       <img src={imgLogo} alt="Instagram Logo" width="120px" />
                    </Grid>
                    <Grid item xs={3}>
                        <div className="navbar_search">
                            <input type="text" placeholder="Search" />
                        </div>
                    </Grid>
                    <Grid item xs={5} style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                       <div className="navbar_icons" style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
                            <HomeIcon fontSize="large" style={{cursor: 'pointer'}} />
                            <MessageIcon fontSize="large" style={{cursor: 'pointer'}} />
                            <FindInPageIcon fontSize="large" style={{cursor: 'pointer'}} />
                            <RecommendIcon fontSize="large" style={{cursor: 'pointer'}} />
                            <Avatar 
                                alt="User" 
                                sx={{ width: 32, height: 32, cursor: 'pointer', bgcolor: '#191819ff' }}
                            >
                                U
                            </Avatar>
                       </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default NavBar;