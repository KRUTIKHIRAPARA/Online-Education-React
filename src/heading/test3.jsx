import React from 'react'
import  "./test.css"
import { Try } from '../dummydata'


const test = () => {
  return (
    <>
        <section className='subjects'>
            <div className='container'>
              <div className='imges'>
                <img src='lara-far-EUg3mLMKfbo-unsplash.jpg' alt=''   /> 
              </div>     
              <div className='mnp'>
                {Try.map((val) => (  
                  <div className='items '>                     
                      <h1>{val.title}</h1>
                      <p>{val.desc}</p>
                  </div>                    
                ))}
              </div>
            </div>
        </section>

    </>
  )
}

export default test