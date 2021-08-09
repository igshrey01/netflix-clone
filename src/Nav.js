import React,{useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import "./Nav.css";
function Nav() {
    const [show,handleShow]=useState(false);
    const history=useHistory();
    const transitionNav=()=>{
        if(window.scrollY>250)
        {
            handleShow(true);
        }
        else
        {
            handleShow(false);
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNav);
        return ()=>window.removeEventListener("scroll",transitionNav);
    },[]
    );
    return (
        <div className={`nav ${show && `nav_black`}`}>
            <div className="nav_content">
                <img onClick={()=> history.push('/')}
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png" alt=""/>
            <img onClick={()=>history.push('/profile')}
            className="avatar"
            src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png" alt=""/>
            </div>
            
        </div>
    )
}

export default Nav
