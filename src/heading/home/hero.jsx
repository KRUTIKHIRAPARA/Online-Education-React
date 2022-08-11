import React from 'react'
import  "./hero.css"
import Test from '../test'
import Test2  from '../test2'
import Test3 from '../test3'
import { Link } from 'react-router-dom'


const hero = () => {
  return (
    <>
        <section className='hero'>
            <div className='contact'>
                <div className='cont'>
                  <div className='imges'>
                  <img src='edit.png' alt='public'></img>
                  </div>
                    <h4>online Education</h4>
                    <h5>E-Learning is a better way of Learning</h5>
                    <h5>swipe</h5>
                </div>
                <button className='button'>
                <Link to="/course"> <p className='btn'>see-more</p></Link>
                </button>
            </div>
        </section>

        <section>
           <Test />
           <Test2 /> 
           <Test3 />
          
        </section>
      
    </>
  )
}

export default hero