import React from 'react';
import {Link} from 'react-router-dom'
import './Header.css'
function Header() {
    return (
        <div className="admin_header">
             <Link
             className="admin_header__link"
            to="/">
                <img className="admin_left_header_img" src="https://www.ghanayello.com/img/gh/a/1438899021-73-jobberman-ghana-limited.png" />
            </Link>
            
            
        </div>
    )
}

export default Header
