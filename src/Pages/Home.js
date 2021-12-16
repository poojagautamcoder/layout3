import React from "react";
import Heading from "../Components/Heading";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
import StackHeading from "../Components/StackHeading";

const Home = () => {
  const data = [0,1,2,3]
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <StackHeading/>
      <div className="card-parent">
        <div className="Cards">
          {data.map((cards, index) => {
            return (
              <div key={index}>
                <Layout />
              </div>
            );
          })}
        </div>
    </div>
    </div>
  );
}
  


   
  

export default Home;
