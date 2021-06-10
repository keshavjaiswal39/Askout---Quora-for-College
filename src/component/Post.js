import { Avatar } from '@material-ui/core'
import { ArrowDownwardOutlined, ArrowUpwardOutlined, ChatBubbleOutlineOutlined, MoreHorizOutlined, RepeatOutlined, ShareOutlined } from '@material-ui/icons'
import React from 'react'
import '../css/Post.css'

function Post() {
    return (
        <div className="post">
            <div className="post_info">
                <Avatar />
                <h5>Username</h5>
                <small>TimeStamp</small>
            </div>

            <div className="post_body">
                <div className="post_question">
                    <p>Question</p>
                    <button className="post_btnAnswer">Answer</button>
                </div>
                <div className="post_answer">
                    <p></p>
                </div>
                <img
                    src="https://qph.fs.quoracdn.net/main-qimg-0dac75650f5a3ef37399dcbb40a6ff56"
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
