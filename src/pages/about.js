import React from "react";
import '../styles/about.css';
import FooterPage from "../Components/FooterPage"


const About = () => {
  return (
    <div className="whole">
      <div className='page about'>
        <div className='container'>
          <div className='row'>
            <h3>This is the About page</h3>
          </div>
        </div>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default About;