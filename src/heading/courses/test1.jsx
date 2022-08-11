
import React from "react"
import { Link } from "react-router-dom"


const test1 = () => {
  return (
   

<Link to="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
{/* <!-- Button trigger modal --> */}
<button type="button" className='btn btn-primary' data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>
  
  {/* <!-- Modal --> */}
  <div className='modal fade' id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className='modal-dialog'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title' id='exampleModalLabel'>Modal title</h5>
          <button type="button" className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        
        <div className='modal-body'>
          ...
        </div>
        <div className='modal-footer'>
          <button type="button" className='btn btn-secondary' data-bs-dismiss="modal">Close</button>
          <button type="button" className='btn btn-primary'>Save changes</button>
        </div>
      </div>
    </div>
  </div>
</Link>
  
  )
}

export default test1