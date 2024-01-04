import React from "react";

import Photo0 from "../../assets/photo0.JPG";
import Photo1 from "../../assets/photo1.JPG";
import Photo2 from "../../assets/photo2.jpg";
import Photo3 from "../../assets/photo3.jpg";
import Photo4 from "../../assets/photo4.jpg";
import Photo5 from "../../assets/photo5.jpg";
import Photo6 from "../../assets/photo6.jpg";
import Photo7 from "../../assets/photo7.JPG";
import Photo8 from "../../assets/photo8.JPG";
import "../Css/style.css"

export default function Photography() {
  return (
    <div className="container-photograph" id="photography">
      <div className="lg:mx-12 mx-4 my-25 " id="photography">
        <div className="text-headingColor text-center mb-20">
          <p className="text-xl font-semibold mb-5">Photos</p>
          <h2 className="md:text-5xl text-4xl font-bold">My Photography</h2>
        </div>

        <div className="photo-holder">
      
          <div className="photo-card boxImage">
            <img className="photo" src={Photo2} alt="" />
          </div>
          <div className="photo-card boxImage">
            <img className="photo" src={Photo4} alt="" />
          </div>
          <div className="photo-card boxImage">
            <img className="photo" src={Photo3} alt="" />
          </div>
          <div className="photo-card boxImage">
            <img className="photo" src={Photo1} alt="" />
          </div>
            <div className="photo-card boxImage">
            <img className="photo" src={Photo8} alt="" />
          </div>
          <div className="photo-card boxImage">
            <img className="photo" src={Photo7} alt="" />
          </div>
          <div className="photo-card boxImage">
            <img className="photo" src={Photo6} alt="" />
          </div>
          <div className="photo-card boxImage">
            <img className="photo" src={Photo5} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
