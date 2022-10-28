import React from "react";
import memeData from "../memesData";

const Meme = () => {
  function selImg() {
    const memeArr = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    const Url = memeArr[randomNumber].url;
    document.getElementById("mimg").src = Url;
  }

  return (
    <div className="meme">
      <div className="container">
        <div className="ins">
          <input className="form-input" type="text" placeholder="UpperText" />
          <input className="form-input" type="text" placeholder="LowerText" />
        </div>
        <button className="form-button" onClick={selImg}>
          Get a new meme image
        </button>
      </div>
      <img id="mimg" src="" alt="" />
    </div>
  );
};

export default Meme;
