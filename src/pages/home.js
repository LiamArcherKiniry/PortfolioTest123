import React from "react";
import WorksItem from "../Components/WorksItem"
import FooterPage from "../Components/FooterPage"
import "../styles/home.css"
const Home = () => {
  return (
    <div className="whole">
      <div className='page'>
        <div className='container'>
          <section className="hero">
            <div className="hero-Text">
              <h2 className="hero-Title">Liam Kiniry</h2>
              <p className="hero-Subtitle">UX / UI : Design / Development</p>
            </div>
            <div className="hero-Image">
              <div className="hero-ImageHolder">
                <picture className="hero-Picture">
                  <img className="hero-picture-Image" alt="hero Image" src="https://lh3.googleusercontent.com/yB_M4dpF-w-6_81TCd6KX6DWGq3UNpd_V9Zh5vdfK7vpXHd3AiASFKg_M82ET9sDHAZfR6A1JpIRCh8Ef-2CljV_h8acI_LQstxG7A=w590-e365"></img>
                </picture>
                <video className="hero-Video" autoPlay={true} loop={true} muted={true} > <source type="video/webm" src={require('../assets/imgs/portolioFlip.webm')}></source> </video>
              </div>
            </div>
            <div className="scroll-Down">
              <button aria-hidden={false} aria-label="Scroll Down" tabIndex={null} className="scroll-Button">
                <a href="#cards" className="scroll-Link">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 12 8" className="scrollDown-SVG"><title>Scroll down</title><path d="M10.59.59L6 5.17 1.41.59 0 2l6 6 6-6z"></path></svg>
                </a>
              </button>
            </div>
          </section>
          <section className="works-Section">
            <div className="section-Head-Box">
              <h3 className="section-Head-Title">Selected Works</h3>
              <p className="section-Head-Caption">here is some info</p>
            </div>
            
              <ul id="cards" className="cards-Holder">
                <WorksItem title="MUSTER" path="/muster" image="mermaid" description="Short Muser description can go here depending on how long" subtag1="UX" subtag2="subtag2" subtag3="subtag3" mainTag="UX"></WorksItem>
                <WorksItem title="MYCONNECT" path="/myConnect" image="agingsoc" description="A short description of the MyConnect Project IDK yet" subtag1="UI" subtag2="subtag2" subtag3="subtag3" mainTag="UX"></WorksItem>
                <WorksItem title="AMTRAK" path="/workOne" image="agingsoc" description="A project for the portfolio" subtag1="DEV" subtag2="subtag2" subtag3="subtag3" mainTag="DEV"></WorksItem>
                <WorksItem title="STORY" path="/story" image="mermaid" description="A project from the transnation workshop in Paris" subtag1="UX" subtag2="subtag2" subtag3="subtag3" mainTag="UX"></WorksItem>

              </ul>
           
          </section>
        </div>
      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Home;