import React, { Component } from 'react';
import './MainContent.css';
import Grid from '@mui/material/Grid';
import MainPage from '../MainPage/MainPage';
import StatusBar from '../StatusBar/StatusBar';

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Initialize state if needed
        };
    }
    render() {
        return (
            <Grid container>
                <Grid item xs={3}>
                </Grid>
               
                <Grid item xs={6} className="maincontent_mainSection">
                    <div>
                        <StatusBar/>
                        <MainPage/>
                    </div>
                </Grid>         
               <Grid item xs={3}>
               </Grid>
            </Grid>
        );
    }
}
export default MainContent;
