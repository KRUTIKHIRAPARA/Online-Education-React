import React from 'react'
import  "./test.css"
import { demo } from '../dummydata'

const test2 = () => {
  return (
    <>

<section className='subject'>
            <div className='container'>
              <div className='xyz'>
                  {demo.map((val) => (  
                    <div className='item '>
                        <h1>{val.title}</h1>
                        <p>{val.desc}</p>
                    </div>     
                  ))}
              </div>
              <div className='imgs2'>
                <img src='avel-chuklanov-DUmFLtMeAbQ-unsplash.jpg' alt='' /> 
              </div>
            </div>
        </section>

    </>
  )
}

export default test2