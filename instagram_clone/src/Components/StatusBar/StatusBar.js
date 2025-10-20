import React, { Component } from 'react';
import './StatusBar.css';
import Avatar from '@mui/material/Avatar';
import dp1 from '../../Images/dp1.jpg';

class StatusBar extends Component {
    render() {
        const stories = [
            { username: 'user_one', img: dp1 },
            { username: 'user_two', img: dp1 },
            { username: 'user_three', img: dp1 },
            { username: 'user_four', img: dp1 },
            { username: 'user_five', img: dp1 },
            { username: 'user_six', img: dp1 },
            { username: 'user_seven', img: dp1 },
        ];

        return (
            <div className="statusbar-container">
                <div className="statusbar-scroll">
                    {stories.map((s, idx) => (
                        <div className="status-item" key={idx}>
                            <div className="status-ring">
                                <Avatar src={s.img} className="status-avatar" sx={{ width: 56, height: 56 }} />
                            </div>
                            <div className="status-username">{s.username}</div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default StatusBar;