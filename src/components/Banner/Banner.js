import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-start">
          <MenuBar></MenuBar>
          <div className="col-md-6">
            <h1 className="title">
              BE THE BEST PLAYER STAR AND SHINE
            </h1>
            <p className="text-white para mt-3">
              Sport pertains to any form of competitive physical activity that aims to use, maintain or improve physical ability and skills while providing enjoyment to participants.
              <br />
              <Link to='/about'> <button className="mt-3 about-btn">About Us</button></Link>
            </p>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
