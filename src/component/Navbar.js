import React from 'react'
import logo from '../images/ASK-OUT.png';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';


function Navbar() {
    return (
        <div className="navbar">
            <div className="askout_Header">
                <div className="askout_Header_logo">
                    <img src={logo}/>
                </div>
                <div className="askout_Header_icons">
                    <div className="askout_Header_icon">
                        <HomeIcon />
                    </div>
                    <div className="askout_Header_icon">
                        <FeaturedPlayListOutlinedIcon />
                    </div>
                    <div className="askout_Header_icon">
                        <AssignmentTurnedInOutlinedIon />
                    </div>
                    <div className="askout_Header_icon">
                        <PeopleAltOutlinedIcon />
                    </div>
                    <div className="askout_Header_icon">
                        <NotificationsOutlinedIcon />
                    </div>
                </div>

                <div className="askout_Header_search">
                    <SearchIcon />
                    <input type="text" placeholder="Askout" />
                </div>

                <div className="askout_Header_extra">
                    <div className="askout_Header_avatar">
                        <Avatar />
                    </div>
                    <div>
                        <LanguageIcon />
                        <Button>Ask Questions</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
