import React from 'react'
import  "./test.css"
import { Test } from '../dummydata'


const test = () => {
  return (
    <>

        <section className='subjects'>
            <div className='container' >
              <div className='imgs'>
                <img src='lara-far-EUg3mLMKfbo-unsplash.jpg' alt=''   /> 
              </div>
              <div className='abc'>
                {Test.map((val) => (  
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