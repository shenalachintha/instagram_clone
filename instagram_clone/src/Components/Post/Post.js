import React,{Component}from 'react';
import './Post.css';
import { Avatar } from '@mui/material';




class Post extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // Initialize state if needed
        };
    }
    render() {
        return(
            <div className="post-container">
              <Avatar className='post_image' src=''/>
              <div className='post_username'>
                username
              </div>
              <div>

              </div>
              <div>
                <div></div>
              </div>
            </div>
        )
    }
}
export default Post;