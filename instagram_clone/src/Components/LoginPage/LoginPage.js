import React,{Component} from "react";
import {Grid} from "@mui/material";
import img1 from "../../Images/img1.jpg";
class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>

                    </Grid>
                    <Grid item xs={6}>
                    <img src={img1} alt="Phone" />
                    </Grid>
                    <Grid item xs={3}>

                    </Grid>
                </Grid>
            </div>
        )
    }

}
export default LoginPage;