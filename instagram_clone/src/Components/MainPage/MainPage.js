import React,{Component}from 'react';
import './MainPage.css';
import Post from '../Post/Post';


class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // Initialize state if needed
        };
    }
    render() {
        return(
            <div>
                <Post/>
                <Post/>
            </div>
        )
    }
}
export default MainPage;