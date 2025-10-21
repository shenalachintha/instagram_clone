import React,{Component} from 'react'; 
import {Grid, Box, TextField, Button, Typography} from '@mui/material';
import './LoginPage.css';
import img1 from '../../Images/img1.svg';
class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: ''
        }
    }
    
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleLogin = () => {
        console.log('Login clicked', this.state);
        // Call parent component's login handler to navigate to home
        if (this.props.onLogin) {
            this.props.onLogin();
        }
    }
    
    render(){
        return(
            <Grid container spacing={0} style={{height: '100vh', width: '100vw'}}>
               
                <Grid item xs={3}>
                    <Box className="section section-a">
                     <div>
                        <h1>Welcome to Instagram Clone</h1>
                     </div>
                    </Box>
                </Grid>
                
              
                <Grid item xs={6}>
                    <Box className="section section-b">
                        <img src={img1} alt="Instagram Clone" style={{width: '70%', maxWidth: '500px'}} />
                    </Box>
                </Grid>
                
              
                <Grid item xs={3}>
                    <Box className="section section-c">
                        <Box className="login-card">
                            {/* Instagram Logo */}
                            <Typography variant="h3" className="instagram-logo">
                                Instagram
                            </Typography>
                            
                            {/* Login Form */}
                            <Box className="login-form">
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    placeholder="Phone number, username, or email"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleInputChange}
                                    className="login-input"
                                />
                                
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    size="small"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                    className="login-input"
                                />
                                
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className="login-button"
                                    onClick={this.handleLogin}
                                >
                                    Log in
                                </Button>
                                
                              
                                <Box className="divider-container">
                                    <Box className="divider-line"></Box>
                                    <Typography className="divider-text">OR</Typography>
                                    <Box className="divider-line"></Box>
                                </Box>
                                
                                
                                <Button
                                    fullWidth
                                    className="facebook-login"
                                >
                                    <span style={{marginRight: '8px'}}>📘</span>
                                    Log in with Facebook
                                </Button>
                                
                               
                                <Typography className="forgot-password">
                                    Forgot password?
                                </Typography>
                            </Box>
                        </Box>
                        
                       
                        <Box className="signup-card">
                            <Typography>
                                Don't have an account? <span className="signup-link">Sign up</span>
                            </Typography>
                        </Box>
                        
                    
                        <Box className="get-app">
                            <Typography className="get-app-text">Get the app.</Typography>
                            <Box className="app-buttons">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/640px-Download_on_the_App_Store_Badge.svg.png" 
                                     alt="Get it on App Store" 
                                     className="app-store-badge"
                                     onError={(e) => {e.target.style.display='none'}} />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/640px-Google_Play_Store_badge_EN.svg.png" 
                                     alt="Get it on Google Play" 
                                     className="app-store-badge"
                                     onError={(e) => {e.target.style.display='none'}} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        )
    }

}
export default LoginPage;