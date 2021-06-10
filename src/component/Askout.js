import React from 'react';
import '../css/Askout.css';
import Navbar from './Navbar';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widget from './Widget';

function Askout() {
    return (
        <div className="askout">
            <Navbar />
            <div className="askout_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    )
}

export default Askout;
