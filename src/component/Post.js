import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import '../css/Post.css'

function Post( {id,question,image,timestamp,askoutUser} ) {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar 
                    src = {askoutUser.photo}
                />
                <h5>{askoutUser.displayName ? askoutUser.displayName : askoutUser.email}</h5>
                <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
            </div>

            <div className="post_body">
                <div className="post_question">
                    <p>{question}</p>
                    <button className="post_btnAnswer">Answer</button>
                </div>
                <div className="post_answer">
                    <p></p>
                </div>
                <img
                    src={image}
                    alt=""
                />
            </div>

            <div className="post_footer">
                <div className="post_footerActions">
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOutlined />
                <ChatBubbleOutlineOutlined />
                <div className="post_footerRight">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div> 
    );
}

export default Post
