import React from 'react'
import './ProfileScreen.css'
import { useSelector } from 'react-redux'
import {selectUser} from '../features/userSlice'
import Nav from '../Nav.js'
import {auth} from '../firebase.js'
function ProfileScreen() {
    const user =useSelector(selectUser);

    return (
        <div className="profilescreen">
            <Nav/>
            <div className="psbody">
                <h1>Edit Profile</h1>
                <div className="psinfo">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>
                    <div className="psdetails">
                        <h2>{user.email}</h2>
                        <div className="psplans">
                        <h3>Plans</h3>
                        
de                        <button onClick={()=>{
                            auth.signOut();                            
                        }} className="pssignout">Sign Out</button>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProfileScreen
