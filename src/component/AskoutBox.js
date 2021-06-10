import { Avatar } from '@material-ui/core';
import React from 'react'
import '../css/AskoutBox.css';

function AskoutBox() {
    return (
        <div className="askoutBox">
            <div className="askoutBox_info">
                <Avatar />
                <h5>Username</h5>
            </div>
            <div className="askoutBox_ask">
                <p>Type your question</p>
            </div>
        </div>
    )
}

export default AskoutBox
