import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
<>

    <section className='head'>
      <div className='container'>
        <div className='abc'>
          <div className='imgs'>
            <img src='headd.jpg' alt=''   /> 
          </div>
          
{/*------------------------menu section start----------------------------*/}

            <div className='xyz'>
              <nav className='menu'>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/course">Course</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>      
            
{/*------------------------menu section ends----------------------------*/}
        </div>
      </div>
    </section>

</>
  )
}
export default Head