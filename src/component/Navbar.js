import React, {useState} from 'react'
import logo from '../images/ask-out logo.png';
import HomeIcon from '@material-ui/icons/Home';
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined';
import AssignmentTurnedInOutlinedIon from '@material-ui/icons/AssignmentTurnedInOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, Button } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import "../css/Navbar.css";
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Modal from 'react-modal';

function Navbar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false)

    return (
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

            <div className="askout_Header_input">
                <SearchIcon />
                <input type="text" placeholder="Askout" />
            </div>

            <div className="askout_Header_extra">
                <div className="askout_Header_avatar">
                    <Avatar 
                        onClick = {() => auth.signOut()} src = {user.photo}
                    />
                </div>
                <LanguageIcon />
                <Button onClick = {() => setOpenModal(true)}>Ask Questions</Button>
                <Modal 
                    isOpen = {openModal}
                    onRequestClose = {() => setOpenModal(false)}
                    shouldCloseOnOverlayClick = {false}
                >
                    <div className="modal_title">
                        <h5>Add Questions</h5>
                        <div className="modal_info">
                            <p>Modal Body</p>
                        </div>
                        <button onClick={() => setOpenModal(false)}>
                            Cancel
                        </button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar;
