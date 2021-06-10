import React from 'react'
import '../css/Feed.css'; 
import AskoutBox from './AskoutBox';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <AskoutBox />
            <Post />
        </div>
    )
}

export default Feed