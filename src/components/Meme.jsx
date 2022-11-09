import React from "react";
import { useState } from "react";
import memeData from "../memesData";

const Meme = () => {
  const [allMemes, setAllMemes] = useState(memeData);

  const [memeImg, setMemeImg] = useState({
    topText: "",
    bottomText: "",
    randomImg: "/",
  });

  function selImg() {
    const memeArr = allMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    const Url = memeArr[randomNumber].url;
    setMemeImg((prevState) => ({
      ...prevState,
      randomImg: Url,
    }));
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
      <img id="mimg" src={memeImg.randomImg} alt="" />
    </div>
  );
};

export default Meme;
