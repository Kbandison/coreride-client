import React from "react";

const Hero = () => {
  return (
    <div className="bg-[url(src/images/063-tesla-model-3-2024-review.jpg)] bg-cover ">
      <div className="h-[95vh] flex flex-col justify-center items-center bg-black bg-opacity-20">
        <h1 className="text-white">Welcome to Coreride!</h1>
        <button className="btn">Buy now!</button>
      </div>
    </div>
  );
};

export default Hero;
