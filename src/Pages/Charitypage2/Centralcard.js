import React, { Component } from "react";
import Image from "./img1.jpg";
import Styles from "./charitypage2.css";
function CentralCard() {
  return (
    <div className="card-container" style={Styles}>
      <div className="card-1">
        <div className="picture-1">
          <img src={Image} />
          <text>CHARITY NAME</text>
        </div>
        <div className="text-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="last-1">
          <button className="donate">Donate</button>
        </div>
      </div>
      <div className="card-2">
        <div className="picture-1">
          <img src={Image} />
          <text>CHARITY NAME</text>
        </div>
        <div className="text-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="last-1">
          <button className="donate">Donate</button>
        </div>
      </div>
      <div className="card-3">
        <div className="picture-1">
          <img src={Image} />
          <text>CHARITY NAME</text>
        </div>
        <div className="text-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </div>
        <div className="last-1">
          <button className="donate">Donate</button>
        </div>
      </div>
    </div>
  );
}

export default CentralCard;
