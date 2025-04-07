import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleHome = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Anahee</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure
          </p>
        </div>
      </div>
      {/* <div className="container">
        <div className="welcome-content text-center">
          <h1>Our Vision</h1>
          <p>
            At Anahee, our vision is to empower modern women with affordable
            luxury that seamlessly blends cultural heritage and contemporary
            aesthetics. We aim to craft timeless designs that inspire confidence
            and grace, ensuring every woman feels elegant and empowered without
            compromising on quality or value
          </p>
        </div>
      </div> */}
    </div>
  );
};

SectionTitleHome.propTypes = { 
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default SectionTitleHome;
