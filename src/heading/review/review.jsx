import React from 'react'
import "./review.css"
import { alldetails } from '../../dummydata'
import ReactPlayer from 'react-player';
import Review2 from "../review/review2"
import "./review2.css"


const review = () => {
  return (
    
      <>
  <section className='all'>
    <div className='container' >
      <div className='abc'>
        {alldetails.map((val) => (  
          <div className='items'>
            <h1>{val.title}</h1>
            <p>{val.desc}</p>
            <h1>what does a software engineer do ?</h1>
            <p>{val.alldetails}</p>

            <h1>What should I study to become a software engineer?</h1>
            <p>{val.skill}</p> 
            <ul>
            <p>{val.IITS}</p> 
            <p>{val.BITS}</p> 
            <p>{val.IISc}</p> 
            <p>{val.NITS}</p> 
            <p>{val.BTEC}</p> 
            </ul>
            <p>{val.sof}</p> 

            <h1>Skills required for software engineering</h1>          
            <p>{val.if}</p> 
            <p>{val.coding}</p> 
            <p>{val.testing}</p> 
            <p>{val.problem}</p> 
            <p>{val.Analytical}</p> 
            <p>{val.Communication}</p>

            <h1>How to become a software engineer</h1>
            <p>{val.Graduate}</p>
            <p>{val.Pursue}</p>
            <p>{val.Apply}</p>
            <p>{val.Complete}</p>
            <p>{val.Pursuea}</p>
            </div>
            ))}
            <button className='bttn'><p className='download'>download</p></button>
            <div className='imgg'>
            <span><ReactPlayer url="https://www.youtube.com/watch?v=sO8eGL6SFsA" width="50%" height="50%" /></span>
            <img src='/software.png' alt=""/>
          </div>
      </div> 
    </div>
     


      
    <section>
      <div className='review'>
        <div className='contant'>
          <h3>Review</h3>
          <div className='form2'>
              <form><center>
                <input type={'text'} placeholder="Name"></input><br></br>
                <input type={'email'} placeholder="E-mail"></input><br></br>
                <input type={'textarea'} placeholder="Message" className='msg'></input><br></br>
                <input type={'button'} value="send" className='btn'></input></center>
              </form>
          </div>  
        </div>
      </div>
    </section>
    <Review2/>
    </section>

    </>
    );
}

export default review