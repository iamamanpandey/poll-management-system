import React from "react";

export default function Card() {

var x = Math. floor(Math. random() * 256);
var y = Math. floor(Math. random() * 256);
var z = Math. floor(Math. random() * 256);
var bgColor = "rgb(" + x + "," + y + "," + z + ")";
var bgColor2 = "rgb(" + z + "," + x + "," + y + ")";
var bgColor3 = "rgb(" + y + "," + z + "," + x + ")";



  return (
    <div className="w-50  mx-auto">
      <div className="card my-2" style={{backgroundColor:`${bgColor}`}} >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div className="card my-2" style={{backgroundColor:`${bgColor2}`}}>
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div className="card my-2" style={{backgroundColor:`${bgColor3}`}}>
        <div className="card-header">Featured</div>
        <div className="card-body ">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div className="card my-2" style={{backgroundColor:`${bgColor}`}}>
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
    </div>
  );
}