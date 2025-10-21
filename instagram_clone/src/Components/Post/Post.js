import React,{Component}from 'react';
import './Post.css';
import Avatar from '@mui/material/Avatar';
import post1 from '../../Images/post1.webp';
import dp1 from '../../Images/dp1.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';




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
              {/* Post Header */}
              <div className="post-header">
                <Avatar className='post-avatar' src={dp1} sx={{ width: 32, height: 32 }}/>
                <div className='post-username'>username</div>
              </div>
              
              {/* Post Image */}
              <div className="post-image-wrapper">
                <img className='post-image' src={post1} alt='post'/>
              </div>
              
              {/* Post Actions */}
              <div className="post-actions">
                <div className="post-actions-left">
                  <FavoriteBorderIcon style={{cursor: 'pointer'}} />
                  <ChatBubbleOutlineIcon style={{cursor: 'pointer'}} />
                  <SendIcon style={{cursor: 'pointer'}} />
                </div>
                <div className="post-actions-right">
                  <BookmarkBorderIcon style={{cursor: 'pointer'}} />
                </div>
              </div>
              
              {/* Liked By */}
              <div className="post-likes">
                <Avatar src={dp1} sx={{ width: 20, height: 20, marginRight: '8px' }}/>
                <span>Liked by <strong>user_one</strong> and <strong>others</strong></span>
              </div>
              
              {/* Caption */}
              <div className="post-caption">
                <strong>username</strong> This is a sample caption for the post...
              </div>
            </div>
        )
    }
}
export default Post;