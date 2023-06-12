import './App.css'
import React from 'react'
import { ThemeContext } from './themeContext';


class Navbar extends React.Component
 {    
   
   render(){ 

   

    return(
       
        <div   >
         <div className='navbar'>
        <div  className="navlist"   >
           
       <div className='navitem' > <a href='/Home'  >
          Home
        </a></div>

        <div className='navitem'>
        <a href="/about">
          About                             
        </a></div>

        <div className='navitem'>
        <a  href="/contact">
          Contact us
        </a></div>
        <div className="right menu">
          <a className="">
          <div className='navlogin'>
            Login</div>
          </a>
          </div>
        </div>
        </div>
       
        </div>

        
        
    );
}}
 export default Navbar;