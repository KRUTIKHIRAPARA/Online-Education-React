import React from "react"
import Title from "../../heading/common/back.jsx"
import { homeAbout } from '../.././dummydata.js'
import Awrapper from "./awrapper.jsx"
import "./about.css"

const AboutCard = () => {
  return (
    <>
    
      <section className='aboutHome'>
        <div className='container'>
          <div className='left-row'>
            <img src='about.jpg' alt=''   />
          </div>
          <div className='right'>
            <Title  title='LEARN &nbsp; ANYTHING' subtitle='Benefits About Online Learning Expertise' />
              <div className='items'>
                {homeAbout.map((val) => (  
                  <div className='item '>
                      <div className='imgs'>
                        <img src={val.cover} alt=''  />
                      </div>
                      <div className='text'>
                          <h2>{val.title}</h2>
                          <p>{val.desc}</p>
                      </div>
                  </div>
                ))}
              </div>
          </div>
        </div>
      </section>
        
    <Awrapper /> 

    </>
  )
}

export default AboutCard




