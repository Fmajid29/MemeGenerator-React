import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import memeData from "../memesData";

const Meme = () => {
  const [allMemes, setAllMemes] = useState([]);

  const [memeImg, setMemeImg] = useState({
    topText: "",
    bottomText: "",
    randomImg: "/",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function selImg() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const Url = allMemes[randomNumber].url;
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
