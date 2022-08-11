import React from "react"
import "./course.css"
import "./bootstrap.css"
import "./jq.js"
import { CourseCard } from "../../dummydata"
import { Link } from "react-router-dom"

function courseCard() {

  return (
    <>
    <div className='modal fade' id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' id='exampleModalLabel'>software Engineer</h5>
          <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div className='modal-body'>

          <h5>
          A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization.
          </h5>
        </div>
        <div className='modal-footer'>
          <button type="button" className='btn btn-secondary' data-bs-dismiss="modal">Close</button>
          <button type="button" className='btn btn-primary'><Link to="/review">All details</Link></button>
        </div>
      </div>
    </div>
  </div>

  
      <section className='coursecard'>
        <div className='container grid2'>
          {CourseCard.map((val) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='imgs'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.courseName}</h1>
                  <div className='details'>
                    {val.courTeacher.map((details) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                            <div className='para'>
                              <h4>{details.name}</h4>
                              <h3>{details.totalTime}</h3>
                              <h3>{details.time}</h3>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                  <div className='rate'>
                    <span>&#9733;
                      &#9733;
                      &#9733;
                      &#9733;
                      &#9734;
                    </span> 
                  </div>
                </div>
              </div>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Read-more</button>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}

export default courseCard
