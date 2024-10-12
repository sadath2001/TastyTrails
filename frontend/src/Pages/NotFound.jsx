import React from "react";
import Pasta from "../assets/Images/pasta-bg.png";
import { Link } from "react-router-dom";

const NotFound=()=>{
    return(
<div className="h-screen w-screen  flex items-stretch">
	<div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
   		<div className="max-w-md">
      		<div className="text-7xl font-dark font-[Merriweather] font-bold text-red-700">404</div>
            <p
              className="text-2xl mt-8 mb-8 md:text-3xl font-[Merriweather] font-light leading-normal"
            >Sorry! <br/> we couldn't find this page. </p>
          <p className="mt-8 mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
  <Link to="/"
              className="inline-flex items-center bg-red-700 border-0 py-1 px-3 focus:outline-none hover:bg-red-500 rounded text-white md:mt-0 transition-all">
Back To Homepage </Link>
    </div>
    <br/>
      <div className="max-w-lg">
        <img src={Pasta}/>
    </div>
    
  </div>
</div>
    );
};

export default NotFound;

