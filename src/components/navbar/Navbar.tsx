import React, { useState } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemText, SwipeableDrawer } from "@mui/material"
import logo from '../../assets/logo.svg'
import './_navbar.scss';

function Navbar() {
    const [toggle, setToggle] = useState(false);
    const handleToggle = ()=>{
        setToggle(!toggle)
    }
  return (
   <nav className="navbar">

        <img src={logo} alt="logo" className="logo" />
        <div className="links-container">

        <ul className='navbar-links'>
            <li className='active'>
                <a href="#home">Home<div ></div></a>
                
            </li>
            <li>
                <a href="#about">About<div></div></a>
                
            </li>
            <li>
                <a href="#services">Services<div></div></a>
                
            </li>
            <li>
                <a href="#contact">Contact us<div></div></a>
                
            </li>  
        </ul> 
    
        <SwipeableDrawer anchor="left" open={toggle} onClose={() => setToggle(false)} onOpen={()=> setToggle(true)}>

           
            <Box 
                sx={{width:250 }}
                role="presentation"
                onClick={()=> setToggle(false)}
                onKeyDown={()=> setToggle(false)}
            >   
                <List>

                    <ListItemButton >
                    
                        <ListItem className="menu-list">
                            
                            <ListItemText  primary={<a className="menu-link" href="#home">Home</a>} />
                            <ListItemText  primary={<a className="menu-link" href="#about">About</a>} />
                            <ListItemText  primary={<a className="menu-link" href="#services">Services</a>} />
                            <ListItemText  primary={<a className="menu-link" href="#contact">Contact us</a>} />
                            
                        </ListItem> 
                    </ListItemButton>
                </List>
            </Box> 
        </SwipeableDrawer>
      <div className="hamburger" onClick={handleToggle}>

            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            
        </div>
        </div>
   </nav>
  )
}

export default Navbar