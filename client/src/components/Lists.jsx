

const Lists = () => {
  return (
    <div>
        <div className="container">
        <div className="sub-nav-frame ">
                <ul className="nav-links-list p-0">
                    <li className="activ-lis">All Posts(32)</li>
                    <li>Article</li>
                    <li>Event</li>
                    <li>Education</li>
                    <li>Job</li>
                </ul>
                <div className="button-frame d-flex gap-3 align-items-center">
                    <div className="dropdown">
                        <button className="btn btn-secondary border-0 dropdown-toggle bg-EDE px-3 py-2 text-dark fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"transparent"}}>
                Write a Post
              </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another action</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
                    <button type="button" className="desk-flex btn btn-primary px-3 py-2 d-flex align-items-center justify-content-center gap-2" >
              <img src="./images/group.png" alt=""/>
              Join Group
            </button>
                </div>
            </div>
        

        </div>

        <div className="container mt-1">
        <div className="frame">
            <div className="heading">
                <h2>Post(392)</h2>
            </div>

            <div className="dropdown">
                        <button className="btn btn-secondary border-0 dropdown-toggle bg-EDE px-3 py-2 text-dark fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filter(ALL)
              </button>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="#">Action</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Another action</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </li>
                        </ul>
                    </div>
          
        </div>


        </div>
    </div>
  )
}

export default Lists