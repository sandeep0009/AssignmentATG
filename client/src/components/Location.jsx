

const Location = () => {
  return (
    <div>

<div className="location-groups-frame w-100 mw-243  float-end">
                <div className="location-input-box w-100 border-bottom border-dark d-flex py-2 mb-2 align-items-center justify-content-between">
                    <img src="./images/location.png" alt=""/>
                    <input className="fx-14 text-dark border-0 shadow-none  fw-bold" type="text" placeholder="Noida, India"/>
                    <img src="./images/edit.png" id="edit" alt="edit"/>
                </div>
                <div className="varning-box d-flex align-items-center justify-content-center mt-4  gap-3">
                    <img src="./images/1.png" alt="img"/>
                    <span className="fx-12 varing-para">Your location will help us serve better and extend a personalised experience.</span>
                </div>

            </div>
    </div>
  )
}

export default Location