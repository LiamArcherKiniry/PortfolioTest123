import React from "react";
import '../styles/workPage.css';
import FooterPage from "../Components/FooterPage"


const Muster = () => {
    
  return (
    <div className="whole">
      <div className="page">
        <div className="container">
          <div className="header-container">
            <div className="header-box-grid">
              <header className="header">
                <h1 className="project-Title">MUSTER</h1>
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
                        <li>User-Centered Design</li>
                        <li>Mobile App</li>
                        <li>Academic Project</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tags-section">
                    <div className="tags-section-inner">
                      <h3 className="tags-section-title">Roles</h3>
                      <ul className="tags-ul">
                        <li>Strategy</li>
                        <li>UX / UI Design</li>
                        <li>User-Research</li>
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
                    <span style={{fontWeight: 'bold'}}>Muster</span> is a tool to help deaf and hard of hearing people communicate with their colleagues during meetings.
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
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/musterIllustration.svg')} alt="project icon show" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2-2">
                  
                    <div className="Asset-sc" style={{margin: 'auto', maxWidth: '250px'}}>
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper" style={{borderRadius: '15px'}}>
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/chat1.gif')} alt="project icon show" >
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
                <h2 className="summary-header">Task &amp; Scope</h2>
                <div className="summary-description">
                  <p>
                    Muster was designed as part of a User-Centered Design(UCD) class. Our task was to use the UCD design methodology to design an assistive device for deaf and hard of hearing (DHH) people in the workplace.
                    <br></br> <br></br>Project Features
                  </p>
                </div>
              </div>
              <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Scheduling</h3>
                    <p className="section-card-description">
                      Users can schedule meetings with colleagues, set reminders, and create meeting environment preferences.
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Fluent Meetings</h3>
                    <p className="section-card-description">
                      Users can communicate using their preferred mode (ASL/English/Text) while the system translates their conversation into each respective language with a complete transcript of all meeting content.
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Holistic Experience
                    </h3>
                    <p className="section-card-description">
                      Muster uses existing meeting design patterns and ambient feedback (light / haptics) to create a meeting environment that enables all people to connect and normalizes accessibility.
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
                User-Centered Design
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    User-Centered Design is an iterative process that focuses on an understanding of the users and their context in all stages of design and development.
                  </p>
                  <p>
                    For this project we completed four sprint cycles in the UCD methodology.
                  </p>
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
                        <img style={{width: '100%'}} src={require('../assets/imgs/muster/ucdProcess.png')} alt="the steps of the UCD process in a cycle: problem identification, needs assessment, design solutions, specify requirements, evaluate designs"></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overview-container">
          <div className="separator"></div>
          <div className="asset-grid">
            <div className="desc-section-container">
              <h3 className="desc-section-title">
                Problem Identified
              </h3>
            </div>
            <div className="desc-section-container2">
              <div className="desc-section-text">
                <div>
                  <p>
                    DHH people and hearing people have difficulty communicating in the workplace. We took this challenge on to understand the context, assess needs, and design a solution.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overview-container">
          <div className="section-title">
            <h2 className="section-title-text">Round One</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                Round One
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    Research and Ideation
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round One: Identifying Needs</h2>
                <div className="summary-description">
                  <p>
                   Identifying user needs is the key to starting any project and ensuring that your product is a solution to an issue people are facing. We identified our users' needs through interviews.
                    
                  </p>
                </div>
              </div>
              <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Methods</h3>
                    <p className="section-card-description">
                      Semi-Structured Interviews
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Demographics</h3>
                    <p className="section-card-description">
                        2 DHH Individuals<br></br>
                        1 Hearing Individual (no ASL)<br></br>
                        1 Hearing Individual (ASL Fluency)

                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Tools
                    </h3>
                    <p className="section-card-description">
                      Google Docs, ASL, Pen and Paper, Personas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>







        <div className="overview-container">
          <div className="separator"></div>
          <div className="asset-grid">
            <div className="desc-section-container">
              <h3 className="desc-section-title">
                Personas
              </h3>
            </div>
            <div className="desc-section-container2">
              <div className="desc-section-text">
                <div>
                  <p>
                    From our interviews we constructed these personas as a quick reference to represent people's preferences, abilities, and more.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="picture-section-container">
        
          <div className="Assets__ScrollContainer">
            <div className="Assets__ScrollCrop">
              <div className="Assets__Wrapper">
                <div className="Assets__AssetGrid">
              
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/Linda.png')} alt="a persona representing the needs of deaf and hard of hearing users" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                          <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/Ben.png')} alt="a persona representing the needs of hearing users with no ASL knowledge" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                          <img aria-hidden="true" target="_blank" className="asset-multi-img" src={require('../assets/imgs/muster/Rachel.png')} alt="a persona representing the needs of hearing users with some ASL knowledge" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  
                
                </div>
              </div>
            </div>
                {/* <div className="Box-orauqc-0 jhjLhs Assets__SwipeIndicators-sc-1bgj18y-6 kgRhIX">
                  <div className="Box-orauqc-0 Indicators__Dot-ldhur7-0 kOLRSe">
                  </div>
                  <div className="Box-orauqc-0 Indicators__Dot-ldhur7-0 HSuQj">
                  </div>
                  <div className="Box-orauqc-0 Indicators__Dot-ldhur7-0 kOLRSe">
                  </div>
                </div> */}
          </div>
        </div>

        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round One: Design Solutions</h2>
                <div className="summary-description">
                  <p>
                        As part of this project we each created 150 sketches. At this stage, any design solutions were acceptable. This was to avoid first solution bias and to avoid limiting ourselves until we established design requirments and criteria.                    
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
                        <img style={{width: '100%'}} src={require('../assets/imgs/muster/sketches.png')} alt="a compilation of quick sketches of our ideas for the project"></img>
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
                <h2 className="summary-header">Round One: Specify Requirements</h2>
                <div className="summary-description">
                  <p>
                        Based on our interviews and brainstorming we developed the following needs assessment criteria to determine which of our ideas could be refined to best serve our users.  
                        <br></br><br></br><span style={{fontWeight: "bold"}}>Needs Assessment Criteria</span>                  
                    
                  </p>
                  <ul>
                      <li>Conveys Emotion (tone +voice)</li>
                      <li>Social Accessibility </li>
                      <li>Ease of Introduction and Nervousness</li>
                      <li>Translates between ASL, Spoken English, written English</li>
                      <li>Group setting and 1-1</li>
                      <li>No extra or complicated devices</li>
                      <li>Implementable /feasible / realistic (can we prototype it?)</li>
                  </ul>
                  
                </div>
              </div>
              
            </div>
          </div>
          
          
        </section>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round One: Evaluate</h2>
                <div className="summary-description">
                  <p>
                        To evaluate our initial sketches we filtered them based on whether or not they met our Needs Assessment Criteria.                 
                    
                  </p>
                  <p>
                      This allowed us to identify the elements of our ideation that best fit our design and our users needs
                  </p>
                  
                  
                </div>
                <div style={{maxWidth: '200px', margin: 'auto'}}>
                        <img style={{width: '100%'}} src={require('../assets/imgs/muster/ideafilter.png')} alt="an illustration of filtering ideas"></img>
                </div>
              </div>
              
            </div>
          </div>
          
          
        </section>

        <div className="overview-container">
          <div className="section-title">
            <h2 className="section-title-text">Round Two</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                Round Two
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    Consolidation and Concept
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round Two: Identifying Needs</h2>
                <div className="summary-description">
                  <p>
                    In order to consolidate our design and ensure we best service our target audience we needed to research the DHH community 

                    
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round Two: Specify Requirements</h2>
                <div className="summary-description">
                  <p>
                        <br></br> <span style={{fontWeight: "bold"}}>Research Notes</span>                  
                    
                  </p>
                  <ul>
                      <li>Virtual Relay Services provided by the government enable real time ASL interpretation</li>
                      <li>Eye contact, facial expressions,  and round table interactions are important parts of deaf culture</li>
                      <li>Not all deaf people communicate using sign language </li>
                      <li>Reading fast paced text can be difficult to people who use English as a second language </li>
                      
                  </ul>
                  
                </div>
              </div>
              
            </div>
          </div>
        </section>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round Two: Design Solutions</h2>
                <div className="summary-description">
                  <p>
                    This shows our collaborative sketch that includes:  
                  </p>
                  <p>
                    an interface enabling users to communicate and receive translation and transcription in front of them.  
                  </p>
                </div>
              </div>
              <div className="picture-section-container">
                <div className="asset-grid">
                    <div className="asset-grid-item">
                    <div className="asset">
                        <div>
                        <div className="asset-frame" style={{paddingBottom: '150%'}}>
                            <div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/sketchfinal.jpg')} alt="a colaboratively made sketch showing the main features of our design"></img>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="summary-box">
                
                <div className="summary-description">
                  
                  <p>
                  I refined our collaborative sketch into an artifact we could present to DHH expert users and receive their feedback on our idea.
                  </p>
                </div>
              </div>
              <div className="picture-section-container">
                <div className="asset-grid">
                    <div className="asset-grid-item">
                    <div className="asset">
                        <div>
                        <div className="asset-frame" style={{paddingBottom: '150%'}}>
                            <div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/detailsketch.jpeg')} alt="a detailed sketch of our design solution showing all of its features and the context of use"></img>
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
                <h2 className="summary-header">Round Two: Evaluate</h2>
                <div className="summary-description">
                  <p>
                     To evaluate the success of our idea we presented it to two DHH expert users and solicited their feedback before developing it further. We obtained the following insights:
               
                    
                  </p>
                  <ul>
                      <li>Our expert users wanted to be able to toggle the transcript and the VRS on and off based on their needs</li>
                      <li>Issues may arise when two people speak at once or interrupt one another with voice to text</li>
                      <li>Too many flashing lights could be overwhelming</li>
                      
                  </ul>
                  <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Methods</h3>
                    <p className="section-card-description">
                      Semi-Structured Interviews
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Demographics</h3>
                    <p className="section-card-description">
                        2 DHH Individuals

                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Tools
                    </h3>
                    <p className="section-card-description">
                      Google Docs, ASL, Pen and Paper, Annotated Sketches
                    </p>
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
            <h2 className="section-title-text">Round Three</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                Round Three
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    Paper Prototyping
                  </p>
                  <p>
                  We decided to prepare a paper prototype as a proof of concept for our design. We knew it needed to include the basic framework for our fluent multimodal conversation interactions.
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round Three: Identifying Needs</h2>
                <div className="summary-description">
                    <p style={{fontWeight: 'bold'}}>
                        <br></br>
                        Scenarios                    
                  </p>
                  <p>
                  Writing scenarios and storyboard allowed us to design an ideal interaction with our design, place out design I think the everyday world of a character, and think through the process and pain points of using our design
                    
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
              
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                          <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/storyboard.png')} alt="a scenario for participating in a meeting in the style of a comic" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                          <img aria-hidden="true" target="_blank" className="asset-multi-img" src={require('../assets/imgs/muster/schedulemeetingsb.jpeg')} alt="a scenario for scheduling meetings in the style of a comic" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  
                  
                
                </div>
              </div>
            </div>
                {/* <div className="Box-orauqc-0 jhjLhs Assets__SwipeIndicators-sc-1bgj18y-6 kgRhIX">
                  <div className="Box-orauqc-0 Indicators__Dot-ldhur7-0 kOLRSe">
                  </div>
                  <div className="Box-orauqc-0 Indicators__Dot-ldhur7-0 HSuQj">
                  </div>
                  <div className="Box-orauqc-0 Indicators__Dot-ldhur7-0 kOLRSe">
                  </div>
                </div> */}
          </div>
        </div>
        </section>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round Three: Design Solutions</h2>
                <div className="summary-description">
                  <p>
                    With our scenario us outlined we could use paper to prototype our design in a way that would allow our users to experience its basic function and ux.
                  </p>
                  <p>
                  We developed a paper prototype of our design to lock down our key features and developed fully fleshed out interactions. The paper prototype was achieved by sketching out storyboard of the use cases we were prototyping. 
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
                        <img style={{width: '100%'}} src={require('../assets/imgs/muster/paperprototype.jpeg')} alt="all of the components of our paper prototype layed out on a table"></img>
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
                <h2 className="summary-header">Round Three: Evaluate</h2>
                <div className="summary-description">
                  <p>
                  We invited our DHH expert users to come and test our paper prototype to ensure it was understandable and that the basic interactions were clear and executable. The users ran through the scenarios we outlined and provided feedback:
               
                    
                  </p>
                  <ul>
                      <li>The labeling on our mockup of the VRS was unclear so the users could not tell who was shown in the prototype</li>
                      <li>The icons, toggling functions, buttons, and chat bubble live transcription were easily understood by our users </li>
                     
                      
                  </ul>
                  <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Methods</h3>
                    <p className="section-card-description">
                        User Testing
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Demographics</h3>
                    <p className="section-card-description">
                        2 DHH Individuals <br></br>
                        1 Hearing Individual (no ASL)

                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Tools
                    </h3>
                    <p className="section-card-description">
                      Google Docs, ASL, Pen and Paper, Paper Prototypes
                    </p>
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
            <h2 className="section-title-text">Round Four</h2>
          </div>
          <div className="overview-content-box">
            <div className="overview-big-box">
              <h2 className="overview-big-text">
                Round Four
              </h2>
            </div>
            <div className="overview-big-box">
              <div className="overview-small-content">
                <div>
                  <p>
                    High-Fidelity Prototyping
                  </p>
                  <p>
                    A high fidelity prototype would showcase our design holistically and realistically to potential users.
                    Our testing on the paper prototypes revealed the need for clear labeling and an understandable native video conferencing widget for the ASL users and the VRS interpreters 

                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="scope-section">
          <div className="section-container">
            <div className="section-container-inner">
              <div className="summary-box">
                <h2 className="summary-header">Round Four: Design Solutions</h2>
                <div className="summary-description">
                  
                  <p>
                  With the help of Figma we were able to realistically visualize and prototype various key features of our proposed design. 
                  </p>
                </div>
              </div>
              <div className="picture-section-container">
                <div className="asset-grid">
                    <div className="asset-grid-item">
                    <div className="asset">
                        <div>
                        <div className="asset-frame" style={{paddingBottom: '60%'}}>
                            <div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/figmashow.png')} alt="a screenshot showing our figma files"></img>
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
                <h2 className="summary-header">Round Four: Evaluate</h2>
                <div className="summary-description">
                  <p>
                        We tested our design with 3 individuals.
                        100% were able to complete the scenario task of holding a conversation in their native modality.

               
                    
                  </p>
                  <ul>
                      <li>One user stated the transcript and VRS and notifications made the UI too cluttered </li>
                      <li>Users could not tell when their camera was recording them and then it was not (VRS)</li>
                     
                      
                  </ul>
                  <div className="scope-card-container">
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Methods</h3>
                    <p className="section-card-description">
                        User Testing
                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">Demographics</h3>
                    <p className="section-card-description">
                        2 DHH Individuals <br></br>
                        1 Hearing Individual (no ASL)

                    </p>
                  </div>
                </div>
                <div className="section-card">
                  <div className="section-card-inner">
                    <h3 className="section-card-title">
                      Tools
                    </h3>
                    <p className="section-card-description">
                      Google Docs, ASL, Pen and Paper, Hi-Fi Prototypes
                    </p>
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
                  <div className="asset-frame" style={{overflow:'hidden'}}>
                    <div>
                      <div>
                        <img style={{width: '100%'}} src={require('../assets/imgs/muster/usertesting.jpg')} alt="a photo of our user testing showing one of our expert user and me"></img>
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
                    
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase1.png')} alt="a showcase of the apps login page"></img>
                            </div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase2.png')} alt="a showcase of the UI for setting up meetings and reminders"></img>
                            </div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase3.png')} alt="a showcase of the UI for hosting and participating in live meetings"></img>
                            </div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase4.png')} alt="a showcase of the UI for reading the transcript and sharing documents"></img>
                            </div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase5.png')} alt="a phone with a flashing light representing the app's ambient notifications"></img>
                            </div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase6.png')} alt="a showcase of the chat bubble UI"></img>
                            </div>
                            <div>
                                <img style={{width: '100%'}} src={require('../assets/imgs/muster/showcase7.png')} alt="a showcase of the UI for viewing and sharing the transcript of the meeting"></img>
                            </div>

                            
                </div>
                <div className="Assets__Wrapper">
                <div className="Assets__AssetGrid">
              
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                            <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/createmeeting.gif')} alt="a gif of the process of creating a meeting" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                          <img aria-hidden="true"  className="asset-multi-img" src={require('../assets/imgs/muster/chat1.gif')} alt="a gif of the standard UI users experience during a meeting" >
                            </img>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                  <div className="asset-grid-item2" onClick={event => event.target.style.width = "100%"}>
                  
                    <div className="Asset-sc">
                      <div>
                        <div className="Asset__FrameWrapper">
                          <div className="image-wrapper">
                          <img aria-hidden="true" target="_blank" className="asset-multi-img" src={require('../assets/imgs/muster/sharedoc.gif')} alt="a gif of the process of sharing a document to the meeting log" >
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
                    This project gave me the experience of ideating, prototyping, and user testing a user-centered design project. I also learned a lot about user testing and how to make people more comfortable voicing their concerns and challenges. It was really nice to be a part of a project geared toward improving the lives of deaf and hard of hearing people. If this project were to go into production I would advocate for bluetooth integration or investigate the opportunity to transform the app into a plugin for an existing service to increase adoption.
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

export default Muster;