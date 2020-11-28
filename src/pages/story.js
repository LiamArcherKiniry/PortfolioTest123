import React from "react";
import '../styles/workPage.css';
import FooterPage from "../Components/FooterPage"


const Story = () => {
    
  return (
    <div className="whole">
      <div className="page">
        <div className="container">
          <div className="header-container">
            <div className="header-box-grid">
              <header className="header">
                <h1 className="project-Title">STORYTELLING INSTALLATION</h1>
                <img aria-hidden="true" className="head-img" src="https://cdn.sanity.io/images/tp1qikt5/production/f936ac6782db983f0ef0bd8529f727920fbba5bb-600x1300.jpg" alt="project icon show"></img>
              </header>
              <div className="header">
                <div className="tags-title-holder">
                  <h2 className="tag-title">Project Details</h2>
                </div>
                <div className="tags-holder">
                  <div className="tags-section">
                    <div className="tags-section-inner">
                      <h3 className="tags-section-title">Project Type</h3>
                      <ul className="tags-ul">
                        <li>Experience Design</li>
                        <li>Interaction Design</li>
                        <li>Interactive Installation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tags-section">
                    <div className="tags-section-inner">
                      <h3 className="tags-section-title">Roles</h3>
                      <ul className="tags-ul">
                        <li>Strategy</li>
                        <li>UX / UI Design</li>
                        <li>Development</li>
                        <li>Graphic Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="summary-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Project Overview</h2>
                <div className="summary-description">
                  <p>
                    This <span style={{fontWeight: 'bold'}}>Storytelling Installation</span> was created as part of RIT's Center for Engaged Story Craft's Transnational Workshop
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
            <div className="asset-grid">
              <div className="asset-grid-item">
                <div className="asset">
                  <div>
                    <div className="asset-frame">
                      <div>
                        <div>
                          <img style={{width: '100%'}} src={require('../assets/imgs/story/cards.png')} alt="a set of cards from our projects UI laying in a pile"></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
        </section>

        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Task &amp; Scope</h2>
                <div className="summary-description">
                  <p>
                    I worked with students from RIT and Paris Université 8 for two weeks in Paris to design and build an interactive installation that explores teh idea of collaborative storytelling across cultures.
                    <br></br> <br></br>Project Features
                  </p>
                </div>
              </div>
              <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Story Elements</h3>
                    <p className="section-card-description">
                      2 users select the characters, setting, and aesthetics of their story using a UI that mimics playing cards.
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Animation</h3>
                    <p className="section-card-description">
                      The choices that the users make affect the animation that is generated and projected in the installation
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Story Outcome
                    </h3>
                    <p className="section-card-description">
                      The users are presented with a MadLibs style story which they have created together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="overview-container">
          <div className="section-title">
            <h2 className="section-title-text">Design Process</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                Project Sprint
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    This project was created in a two week spring that involved moving quickly from ideation, to design, to development
                  </p>
                </div>
              </div>
            </div>
            
          </div>
          <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Ideation</h3>
                    
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Design/Development</h3>
                    
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Installation/Evaluation
                    </h3>
                    
                  </div>
                </div>
              </div>
        </div>


        
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Ideation</h2>
                <div className="summary-description">
                  <p>
                    <span style={{fontWeight: 'bold'}}>Brainstorming and Sketching:</span> We began ideation by researching, testing, and sketching our layout ideas and ideas about how people move through the space, interact with the design, and interact with eachother             
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
          <div className="asset-grid">
            <div className="asset-grid-item">
              <div className="asset">
                <div>
                  <div className="asset-frame" style={{paddingBottom: '100%'}}>
                    <div>
                      <div>
                        <img style={{width: '100%'}} src={require('../assets/imgs/story/IdeationInstallation.png')} alt="a sketch of several possible layouts for the projector and the computers within our alotted space"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <div className="summary-description">
                  <p>
                    <span style={{fontWeight: 'bold'}}>A Blessing in Disguise:</span> We discovered that we would only be allowed one projector and one computer for the installation. This meant that we could direct users to simultaneously use a single device. When we tested this out, it resulted in a much more intimate experience and increased conversation amongst users.                 
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
          <div className="asset-grid">
            <div className="asset-grid-item">
              <div className="asset">
                <div>
                  <div className="asset-frame" style={{overflow: 'hidden', backgroundColor:'rgba(44, 45, 72, 0.5)'}}>
                    <div>
                      <div>
                        <img style={{width: '100%'}} src={require('../assets/imgs/story/togethersketch.png')} alt="a sketch of users interacting with each other in the space"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <div className="summary-description">
                  <p>
                    <span style={{fontWeight: 'bold'}}>Moodboarding / Design Inspiration:</span> What are universal stories, images, icons? What is our unifying theme?               
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
          <div className="asset-grid">
            <div className="asset-grid-item">
              <div className="asset">
                <div>
                  <div className="asset-frame" style={{overflow: 'hidden', backgroundColor:'rgba(44, 45, 72, 0.5)'}}>
                    <div>
                      <div>
                        <img style={{width: '100%'}} src={require('../assets/imgs/story/moodboard1.jpg')} alt="a moodboard showing images of silhouettes, paper puppets, and little red riding hood"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          
        </section>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Design / Development</h2>
                <div className="summary-description">
                  <p>
                    <span style={{fontWeight: 'bold'}}>Assets and UI Elements:</span> We emulates the silhouette style we were inspired by and used playing card UI elements to create a game-like atmosphere to tie into the users' mental models of game playing.            
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
          <div className="asset-grid">
            <div className="asset-grid-item">
              <div className="asset">
                <div>
                  <div className="asset-frame" style={{overflow: 'hidden'}}>
                    <div>
                      <div>
                        <img style={{width: '100%'}} src={require('../assets/imgs/story/contentSample.png')} alt="a sample of the UI assets including the playing cards, some characters, and some scenery"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
          
        </section>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">The UX</h2>
                <div className="summary-description">
                  <p>
                    Users first begin selecting the elements of their story while these selections are projected in an animation in real time for the entire room to see. A select and confirm two-step interaction allows users to change their selection before submitting.          
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
        
          <div className="Assets__ScrollContainer">
            <div className="Assets__ScrollCrop">
              <div className="Assets__Wrapper">
                <div className="Assets__AssetGrid">
              
                  <div className="asset-grid-item2-2">
                  
                    <div className="Asset-sc" style={{display: 'flex', width: '100%'}}>
                      <div style={{margin: 'auto', width: '100%'}}>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/story/installationui.gif')} alt="a gif showing the users interactions for creating a story" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2-2">
                  
                    <div className="Asset-sc" style={{margin: 'auto'}}>
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper" >
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/story/uidisplay2.png')} alt="a still of an animation from the project" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  
                  
                
                </div>
              </div>
            </div>
                
          </div>
        </div>
        
          
        </section>

        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">The Installation</h2>
                <div className="summary-description">
                  <p>
                    We installed out project in Tour Montparnasse and invited people to come and play with it         
                  </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className="picture-section-container">
        
          <div className="Assets__ScrollContainer">
            <div className="Assets__ScrollCrop">
              <div className="Assets__Wrapper">
                <div className="Assets__AssetGrid">
              
                  <div className="asset-grid-item2-2">
                  
                    <div className="Asset-sc" style={{display: 'flex', width: '100%'}}>
                      <div style={{margin: 'auto', width: '100%'}}>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/story/showcase1.gif')} alt="a gif showing someone playing with our installation and taking a photo" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2-2">
                  
                    <div className="Asset-sc" style={{margin: 'auto'}}>
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper" >
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/story/showcase2.gif')} alt="a gif showing two people using the isntallation" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  
                  
                
                </div>
              </div>
            </div>
                
          </div>
        </div>
        
          
        </section>

        
        
        

        
        
        
        
        <div className="overview-container">
          <div className="section-title">
            <h2 className="section-title-text">Reflection</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                Next Steps and Reflection
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    This project was a great learning experience. I really benefited from working with people who have such a diverse range of skills and experiences. We were able to communicate across language barriers and skill sets. We were given a week to construct and install the project so it was an exercise in scale and time management. In the end, we created a functional prof of concept. In the future, we will extend the project beyond the MVP. We hope the project can scale up and be available to travel so it can be seen elsewhere.
                  </p>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
      <FooterPage></FooterPage>
    </div>
  );
};

export default Story;