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
                  <div className="asset-frame" style={{overflow: 'hidden'}}>
                    <div>
                      <div>
                        <img style={{width: '100%'}} src={require('../assets/imgs/story/togethersketch.png')} alt="our notes written on a whiteboard"></img>
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
                <h2 className="summary-header">Low-Fidelity Prototype</h2>
                <div className="summary-description">
                  <p>
                    We created a <span style={{fontWeight: 'bold'}}>Low-Fidelity Prototype</span> to begin ideating UX solutions to our users desires and concerns including privacy, connection, and complexity. This helped us to understand the basic UX and flow through the site and begin creating and testing interactions in a low stakes environment.            
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
                        <img style={{width: '100%'}} src={require('../assets/imgs/myConnect/m4LoFiPrototype.jpg')} alt="a flowchart of all of the components of our paper prototype"></img>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <img style={{width: '100%'}} src={require('../assets/imgs/myConnect/paperProt.gif')} alt="a gif showing a user flipping through the components of the paper prototype"></img>
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
                <h2 className="summary-header">High-Fidelity Prototype</h2>
                <div className="summary-description">
                  <p>
                    Once we understood our designs basic functions and UX we created a <span style={{fontWeight: 'bold'}}>High-Fidelity Prototype</span> to be able to show our stakeholders what interacting with our design would actually be like           
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
                        <img style={{width: '100%'}} src={require('../assets/imgs/myConnect/hifiOverview.png')} alt="a flowchart of all of the components of our digital prototype"></img>
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
            <h2 className="section-title-text">Final Product</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                The Final Product
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    The High-Fidelity Prototype
                  </p>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="scope-section">
          <div className="section-container">
            
            <div className="picture-section-container">
                <div className="asset-grid">
                            <div className="summary-box">
                            <h2 className="summary-header">Onboarding</h2>
                            <div className="summary-description">
                              <p>
                                We designed an system that allows users to establish security questions in lieu of providing personal information. Because our users were tired of getting emails and afraid to share personal information this solution could allow a backdoor if they forget their password.          
                              </p>
                            </div>
                          </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/profCreation.png')} alt="a screenshot of the profile creation page with security questions"></img>
                            </div>
                           
                            <div className="summary-box">
                              <h2 className="summary-header">Quick Tutorial</h2>
                              <div className="summary-description">
                                <p>
                                The overlay shows new users how the system works. This will alleviate some of the stress of learning a new system that our participants expressed. We also would have this in the help section.         
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/gettingStartedOverlay.png')} alt="this shows the app's home screen greyed out with labels indicating the function of buttons"></img>
                            </div>

                            <div className="summary-box">
                              <h2 className="summary-header">Finding Your People</h2>
                              <div className="summary-description">
                                <p>
                                  One of the main pages allows users to find events to attend based on their interests         
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/eventPage.png')} alt="a showcase of the UI for hosting and participating in live meetings"></img>
                            </div>

                            <div className="summary-box">
                              <h2 className="summary-header">Creating Groups</h2>
                              <div className="summary-description">
                                <p>
                                  Users can also create groups through a touch/click to edit popup UI. Many of our interviewees expressed that they would like to have groups for just their family as well as local organizations         
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/groupCreation.png')} alt="a screenshot showing the group creation UI"></img>
                            </div>

                            <div className="summary-box">
                              <h2 className="summary-header">MicroInteraction</h2>
                              <div className="summary-description">
                                <p>
                                  When creating groups new members can be dynamically added with one click. These small interactions increase the convenience of our design.       
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/directaddgroup.gif')} alt="a gif showing the UI interaction of adding group members"></img>
                            </div>

                            <div className="summary-box">
                              <h2 className="summary-header">Group Pages</h2>
                              <div className="summary-description">
                                <p>
                                  Once created, users can see the events that their group is hosting or set to attend and any post that may have been made by group members on that group's unique page          
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/groupInfo.png')} alt="a screenshot of the group page UI with information about group activity"></img>
                            </div>

                            <div className="summary-box">
                              <h2 className="summary-header">MicroInteractions</h2>
                              <div className="summary-description">
                                <p>
                                  Users are able to share events with their groups or individuals directly through just a few clicks by sending them in a dynamically opened chat window.       
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/share.gif')} alt="a gif showing the process of sharing events to the chat UI"></img>
                            </div>
                            <div className="summary-box">
                              <h2 className="summary-header">MicroInteractions</h2>
                              <div className="summary-description">
                                <p>
                                  When users join a group that group is then highlighted on their home page in their 'my communities' section      
                                </p>
                              </div>
                            </div>
                            <div>
                                <img style={{width: '100%', marginBottom: '6rem'}} src={require('../assets/imgs/myConnect/joinedhighlight.gif')} alt="a gif the change in UI affected by joining a group: it is shown in greater contrast to other elements"></img>
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
                  This project helped me to understand a lot about the UX design process and how to take an idea and test it out. I think we still would need to test out this product with more seniors and people of all ages to understand if it is useable, learnable, and desirable. Overall I think we made a product with the potential to really help people stay connected and find new and interesting things to do that is approachable for seniors.
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