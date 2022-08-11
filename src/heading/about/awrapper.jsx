
import React from "react"
 import {awrapper } from "/Users/Dhruv/my-app/src/dummydata"
 import "./about.css"


 const Awrapper = () => {
   return (
     <>
        <section className='awrapper'>
          <div className='container grid'>
            {awrapper.map((val) => (
                <div className='box2 flex'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h1>{val.data}</h1>
                      <h3>{val.title}</h3>
                    </div>
                </div>
                ))}
          </div>
        </section>
     </>
   )
 }

 export default Awrapper
