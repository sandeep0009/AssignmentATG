

const Hero = () => {
  return (
    <div>
        <div className="custom-container ">
            <img src="./images/r.png" className="w-100" style={{opacity:1.5}} alt="" />

            <div className="bottom-left">

                <h2>Computer Engineering</h2>
                <p>142,765 Computer Engineers follow this</p>

            </div>



            <div className="container d-flex justify-content-between">
            <div className="bottom-right">
              <button className="btn btn-secondry" style={{color:"white", border:"1px solid white"}}>Join group</button>
            </div>
            <div className="bottom-top">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="white"/>
</svg>

            </div>

            </div>

           
        </div>

    </div>
  )
}

export default Hero