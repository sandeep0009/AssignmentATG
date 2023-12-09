

const Meetup = () => {
  return (
    <div>
    
    <div className="card custom-card">
      <img src="./images/car.png" alt="..." />
      <div className="card-body">
      <img src="./images/car2.png" alt="" />
      <div className="articl-heading d-flex justify-content-between align-items-start">
                            <h3 className="fs-22-16">
                            Finance & Investment Elite Social Mixer @Lujiazui
                            </h3>
                            <div className="dropdown three-dotes">
                                <button className="btn btn-secondary bg-transparent border-0 dropdown-toggle text-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src="./images/sarthak3.png" alt=""/>
                </button>
                                <ul className="dropdown-menu three-dot-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">Login</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">Sign up</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">more</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
    

                        <div className="date-location d-flex align-items-center gap-5">
                        <div className="date d-flex align-items-center justify-content-center gap-2">
                            <img src="./images/calendar.png" alt=""/>
                            <span className="fs-15-12">Fri, 12 Oct, 2018</span>
                        </div>
                        <div className="d-block justify-content-center align-items-center">
                            <img src="./images/location.png" alt=""/>
                            <span className="fs-15-12">Ahmedabad, India</span>
                        </div>
                    </div>
                    <button className="secondary-btn2 mt-1 w-100 bg-transparent text-danger fw-bold" style={{border:"1px solid #A9AEB8"}}>
                  Visit Website
                </button>



                        <div className="profile-frame d-flex align-items-center justify-content-between">
                            <div className="img-name d-flex align-items-center gap-4">
                                <img className="profile-img mt-2" src="./images/ronal.png" alt="img"/>
                                <span className="fs-18-12 fw-bold text-black">Ronal jones <br/> 

                                <div className="no-viesw mb-flex align-items-center justify-content-between gap-3">
                            </div>
                            </span>
                           
                        </div>
                        <div className="views-share d-flex align-items-center gap-5">
                            <div className="no-viesw desk-flex align-items-center justify-content-between gap-3">
                                <img src="./images/sarthak5.png" alt="/"/>
                            </div>
                            <img src="./images/sarthak6.png" alt=""/>
                        </div>
                    </div>

     

      </div>
   
      
       
      
      </div>
    </div>
   
  )
}

export default Meetup