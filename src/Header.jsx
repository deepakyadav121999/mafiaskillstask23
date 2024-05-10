import React from 'react'
import { Link } from 'react-router-dom'
import './Style/Header.css'
export const Header = () => {
  return (
    <div>
         <div className="header_container">
              <div className="header_left">
               <Link to={'/'} ><img src="https://www.upskillmafia.com/mern/assets/logo-B822Tgcs.svg" alt=""  className='logo_img'/></Link> 
              </div>
              <div className="header_middle">
              <p><Link to={'/home'} style={{textDecoration:'none', color:'black'}}>Home</Link></p>
              </div>
              <div className="header_right">
              <p className="header_btns" ><Link to={'/login'} style={{textDecoration:'none', color:'black'}}>Login</Link> </p>
              <p className="header_btns"><Link to={'/signup'} style={{textDecoration:'none', color:'black'}}>Signup</Link></p>
              </div>
         </div>

    </div>
  )
}
