import React from 'react'
import "./contact.css"


const contactcard = () => {
  return (
    
    <section className='call'>
      <div className='con' >
           <h3>contact me</h3>
        <div className='imgs'>
          <div className='font'>
              <h2>Get in touch</h2>
              <h5>Send Your Email Here </h5>
              <img src='mailz.jpeg' alt='public'></img>
          </div>
          <div className='form'>
            <form><center>
              <input type={'text'} placeholder="Name"></input><br></br>
              <input type={'email'} placeholder="E-mail"></input><br></br>
              <input type={'textarea'} placeholder="Message" className='msg'></input><br></br>
              <input type={'button'} value="send" className='btn'></input></center>
            </form>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>

  )
}

export default contactcard