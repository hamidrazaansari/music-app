import React from 'react'
import img from './header.png'
function Header() {
  return (
    <div>
      <div className="card bg-dark text-white float-end width "  >
        <img src={img} className="card-img " height="250px" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title firstpara fw-bolder ">YOUR FAVOURITE TUNE'S</h5>
          <p className="card-text secondpara fw-bolder ">  ALL  <span className='yellow'><i className="fa-solid fa-sun "></i></span>  AND  ALL <span className='black'> <i class="fa-solid fa-moon"></i></span> </p>
        </div>
      </div>

    </div>
  )
}

export default Header
