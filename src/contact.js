import React from 'react';
import './App.css'

const Contact = () =>{
    return(
      <div className="contact" style={{ topMargin: '400px' }}>
        <h1>contact us</h1>
        <pre>
        <p>
          phone: 8925456378<br></br>
          mail : valliaravind@gmail.completed
        </p>

        <button class="ui instagram button" color='red' style={{display:'flex'}}>
          <i className="instagram icon"></i>
          <a href='https://www.instagram.com/pazha_0806/?igshid=MzNlNGNkZWQ4Mg%3D%3D'>
            Instagram</a>
        </button>

        <div>
          <button className="ui linkedin button"  style={{display:'flex', topMargin:'10px'}}>
            <i className="linkedin icon"></i><a href="https://www.linkedin.com/in/palamanickam-s-2ab81925b">
              LinkedIn</a>
          </button>
        </div>
        </pre>
      </div>
    )
}
 export default Contact;