import { Button } from "@mui/material";
import React from "react";

const Home = () => {
    // const 
  return (
    <div className="relative bg-blend-lighten bg-blue-500 h-screen max-w-md  flex flex-col  items-center text-center text-white ">
      <div className="left p-16 space-y-6">
        <img
          className="rounded-full max-h-56 border-2"
          src="https://i.ibb.co/fGCdLgg/Screenshot-74.png"
          alt=""
        />
        <h1 className="text-5xl font-bold  ">Nafiz Iqbal</h1>
        <h4 className="text-2xl" >Web Designer</h4>
        <div>
          <span>linked</span>
          <span>Face</span>
          <span>Twitter</span>
        </div>
        <Button className="rounded-3xl" variant="contained" border='rounded-full' >Download</Button>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
