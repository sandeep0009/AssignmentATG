

const Navbar = () => {
  return (
    <div className="container ">
        <div className="header-frame ">

            <div className="image">
                <img src="./images/whole.png" alt="" />
            </div>

            <div className="serch-bar d-flex align-items-center gap-3">
                    <img src="./images/search.png" alt="icon"/>
                    <input type="text" className="border-0 shadow-none bg-transparent fx-14 fw-500 black-5C5" placeholder="Search for your favorite groups in ATG"/>
                </div>

          

           
                <div className="dropdown">
                    <button className="btn btn-secondry ">
                    Create Account.  <span style={{color:"blue"}}>ITs Free</span>

                    </button>
                </div>
         

        </div>
    </div>
  );
};

export default Navbar;
