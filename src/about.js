import React from 'react';
import './App.css'

const About = () =>{
    return(
        <div  className="about" style ={{topMargin:'150px' }}>
            <h1>About us</h1>
            <pre>
            I am Palamanickam, a 2nd year undergraduate student at the National Institute of Technology in Puducherry.<br></br>
            I am pursuing a degree in Electrical and Electronics Engineering. <br></br>
            Over the last 2 years of college, I have completed coursework and received experience in front end web development<br></br>
            I  have created the movie searching interface user interface project
            </pre>
            <h3>project completed using :</h3>
            <ul>
                <li>react.js</li>
                <li>bootstrap</li>
                <li>api interface</li>
                <li>movieDB api</li>
                </ul>
        </div>
    )
}
 export default About;