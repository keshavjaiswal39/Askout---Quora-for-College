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
import db, { auth } from '../firebase';
import Modal from 'react-modal';
import { ExpandMore, Link } from '@material-ui/icons';
import { Input } from '@material-ui/core';
import firebase from 'firebase'

function Navbar() {

    const user = useSelector(selectUser);
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState("");
    const [inputUrl, setInputUrl] = useState("");;

    const handleQuestion = (e) => {
        e.preventDefault()

        setOpenModal(false)

        db.collection('questions').add({
            question: input.anchor,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: user
        })

        setInput("")
        setInputUrl("")
    }

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
                    style = {{
                        overlay: {
                            width: 700,
                            height: 600,
                            backgroundColor: "rgba(0,0,0,0.8)",
                            zIndex: "1000",
                            top: "50%",
                            left: "50%",
                            marginTop: "-300px",
                            marginLeft: "-350px",
                            borderRadius: "20px"
                        },                        
                    }}
                >
                    <div className="modal_title">
                        <h5>Add Questions</h5>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal_info">
                        <Avatar
                            className="avatar"
                            src={user.photo}
                        />
                        <p>{user.displayName ? user.displayName : user.email} asked</p>
                        <div className="modal_scope">
                            <PeopleAltOutlinedIcon/>
                            <p>Public</p>
                            <ExpandMore/>
                        </div>
                    </div>
                    <div className="modal_field">
                        <Input
                            required
                            value={input}
                            onChange = {(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Ask your question with 'What', 'How', 'Why', etc "
                        />
                        <div className="modal_fieldLink">
                            <Link />
                            <input
                                value={inputUrl}
                                onChange = {(e) => setInputUrl (e.target.value)}
                                placeholder="Optional: include a link that gives context"
                            >

                            </input>
                        </div>
                    </div>
                    <div className="modal_buttons">
                        <button onClick={() => setOpenModal(false)} className="cancel">Cancel</button>
                        <button onClick={handleQuestion} type = "submit" className="add">Add Question</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Navbar;
