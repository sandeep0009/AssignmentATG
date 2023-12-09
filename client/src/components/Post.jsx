import Sarthak from "./Sarthak";
import Sara from "./Sara";
import Meetup from "./Meetup";
import Job from "./Job";
import Location from "./Location";

const Post = () => {
  return (
    <div className="container">
      <div className="row">
        {/* Left column */}
        <div className="col-md-8">
          <div className="custom-post">
            <div className="custom-jsx">
              <Sarthak />
              <Sara />
              <Meetup />
              <Job />
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-md-4">
          <div className="custom-location-container" style={{ width: '80%' }}>
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
