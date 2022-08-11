import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'

const footer = () => {
  return (
          <section className='footer'>
            <div className='content'>
              <div className='ftr'>
                <h2>Online Education</h2>
                <p>Redefining How Students Research online Education.</p>
              </div>
              <nav className='menuf'>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/course">Course</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
              <div className='helping'>
                <h3>Help</h3>
                <h3>Terms</h3>
                <h3>Privacy</h3>
                <h3>Question</h3>
              </div>
              <div className='media'>
                <input type={"text"} placeholder="search"></input>
                <h3><img src='search.png' alt='public'></img></h3>
                <h5>online.edu@gmail.com</h5>

                <div className='sicon'>
                  <span>
                    {" "}
                    <a href='https://www.instagram.com/dhruv__oo21/'>
                      <img src='instagram.png' alt='public'></img>
                    </a>
                  </span>
                  <span>
                    {" "}
                    <a href='https://www.linkedin.com/in/dhruv-gorasiya'>
                      <img src='linkedin.png' alt='public'></img>
                    </a>
                  </span>
                  <span>
                    {" "}
                    <a href='https://twitter.com/DhruvGorasiya?t=wTOF8vKZL8t0G-L1PMAeEQ&s=09'>
                      <img src='twitter.png' alt='public'></img>
                    </a>
                  </span>
                  <span>
                    {" "}
                    <a href='http://www.google.com'>
                      <img src='google-plus.png' alt='public'></img>
                    </a>
                  </span>
                </div>
              </div>   
            </div>
            <div className='vv'>
              <span><b>Design by:</b> Gorasiya Dhruv</span>
            </div>  
          </section>
  )
}

export default footer