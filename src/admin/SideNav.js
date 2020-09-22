import React,{useState} from 'react'
import './SideNav.css';
import MenuIcon from '@material-ui/icons/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
function SideNav() {

    const [anchorEl, setAnchorEl] = useState(null);
    const [hideM, setHideMenu] = useState(false);


  // const handleClick = (event) => {
    
  //   setAnchorEl(event.currentTarget);
  // };

  const hideMenu = (event) => {
    event.preventDefault()
    setHideMenu(hideM?false:true)
  };
    return (
      
        <div className="sidenav" style={{display:`${hideM && 'none'}`}}>
          <MenuIcon onClick={hideMenu}/>
            {/* <img src=""/> */}

            <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
            
        </div>
    )
}

export default SideNav
