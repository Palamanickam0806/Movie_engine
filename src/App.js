import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './about'
import Navbar from './navbar'
import Contact from './contact'
import ThemeContextProvider from './themeContext'
import './App.css'
import Home from './home.js';
import Ticket from './ticket.js';



function App() {
  
        return(
   <>   
   <header className='logobar'>
                <div className='logobar a:hover'>Pazhazone</div>
            </header><div className="App">
            </div>
                 
<div >

                        <ThemeContextProvider>
                            <BrowserRouter>

                                <Navbar />
                                <Routes className='navlist'>
                                    <Route className='navitem' path='/home' element={<Home />} />
                                    <Route className='navitem' path="/about" element={<About />} />
                                    <Route className='navitem' path="/contact" element={<Contact />} />
                                    <Route path="/ticket" element={<Ticket />} />
                                </Routes>

                            </BrowserRouter>

                        </ThemeContextProvider>

                        </div>          

             
                
                    </>

     

          
          
   
    
        );
    }
    
    


export default App;
