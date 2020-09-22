import React from 'react'
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';

import {auth,provider} from './firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';
import { Link} from 'react-router-dom'

function Header() {

    const preventDefault = (event) => event.preventDefault();


    const [{user},dispatch] = useStateValue()
    const login = ()=>{
        auth.signInWithPopup(provider).
        then(result=>{
            console.log(result)
            localStorage.setItem(
                "userProfile",
                JSON.stringify(
                {userName:result.user.displayName,userPhoto:result.user.photoURL}));

            dispatch({
                type:actionType.SET_USER,
                user:result.user
            })

        }).catch(error=>{
            alert(error.message)
        })
    }

    
    return (
        <div className="header">
            <div className="admin__left_header">
            <MenuIcon />
            <Link
            to="/">
                <img className="left_header_img" src="https://www.ghanayello.com/img/gh/a/1438899021-73-jobberman-ghana-limited.png" />
            </Link>
            </div>


            {/* <div className="middle_header">
                <input type="text" />
                
            </div> */}
            
            <div 
            className="right_header">
               

                {
                    
            user==null?
            (
                <>
                <button className="header_login" onClick={login}>
                Login
                </button>

            <Divider orientation="vertical" style={{height:"50px"}}/>
            <button>
                Sign-Up
            </button>
            </>
            ):
            ( 
                <Link
                to="/dashboard"
                className="header_post_bar"
              >
                Dashboard
              </Link>
        )
        }
                {/* ---------------- */}
               

                <div className="header_post_bar">
                    POST FREE JOBS
                </div>
               
            </div>
            
        </div>
    )
}

export default Header
