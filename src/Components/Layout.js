import React from "react";
import "../Styles/Layout.css";
function Layout() {
  return (
    <div className="row">
      <div className="wrapper">
        {/* ///////////////////////1st starts here/////////////////////////////// */}
        <div>
          <img
            height={150}
            width="100%"
            src="https://thecraftysquire.com.au/wp-content/uploads/2017/08/800x500-300x188.png"
            alt=""
          />
        </div>
        <div className="profile-text">
          <div className = "cardHeading1">
            <p className="Feature-Label">Feature Label</p>  
           
          </div>
       <div className = "cardHeading2">
       <p>
            Lorem Ipsum is simply dummy and type setting this.</p>
       </div>
         
   <div className = "cardHeading3">

   <span className="clickbtn"><button className="profile-btn  profile-btn-1">Buy NOW</button> <button className="profile-btn">MoreInfo</button></span>
         </div> 
        </div>
        {/* ///////////////////////1st Ends Here/////////////////////////////// */}
      </div>
    </div>
  );
}
export default Layout;
