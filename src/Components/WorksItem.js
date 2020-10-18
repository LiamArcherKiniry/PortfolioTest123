import React, { useRef, createRef, Component } from 'react';

import { Link } from 'react-router-dom';
import '../styles/worksItem.css';
import WorkOne from '../pages/workOne'
import Muster from '../pages/muster'



class WorksItem extends Component {
  constructor(props) {
    super(props);
    
    /* this.sectionStyle = {
      backgroundImage: `url(${this.props.post.frontmatter.thumbnail})`
    }; */

    this.vidRef = React.createRef()
 
  };

  handlePLay = e =>{
    e.preventDefault();
    
    /*paused: true*/
    this.vidRef.current.play()
  }
  handlePause = e =>{
    e.preventDefault();
    
    this.vidRef.current.pause()
  }
  

  render() {
    
    return(
       <li className="card-Holder" 
        onMouseOver={this.handlePLay}
        onMouseOut={this.handlePause} >
         <article className="item-Card">
          <Link to={this.props.path} className="card-Link" aria-label={"Read more about" + this.props.title + ""}>
             <span className="cardTop-Span">
              <div className="cardTop-Span-Inner">
              </div>  
            </span> 
            <span className="cardMain-Span">
                <div className="cardMain-Content">
                  <div className="multi-Holder">
                    <div className="smallSVG-Front">
                      <svg focusable="false" viewBox="0 0 412 412" className="smallFront-SVG"><g fill="none" fillRule="evenodd" strokeWidth="5"><path d="M1 329.501h410M1 165.501h410M1 247.501h410M1 83.501h410"></path><path d="M83.25 1.25v410.5M247.25 1.25v410.5M165.25 1.25v410.5M329.25 1.25v410.5"></path><path d="M1 1h410v410H1z"></path></g></svg>
                      <span className="smallSVGfront-Back">
                         {this.props.mainTag}
                      </span>
                    </div>
                  </div>
                  <div aria-hidden="true" className="card-AnimHolder">
                    <video  
                      id= { "Video"+this.props.title} 
                      ref={this.vidRef}
                      className="video-AnimWebP" 
                      
                      loop={true} 
                      muted={true}  
                      preload="auto" 
                      
                      src="https://storage.googleapis.com/gweb-aiaz.appspot.com/animations/B.webm">

                    </video> 
                    <picture className="card-Picture">
                      <source media="(max-width: 1024px)" srcSet="https://lh3.googleusercontent.com/x5eHfb7dCmFbllwNyt7F_ZPKhH_YmQIh5IVXd1bsdyYXiAo8FZGL5_gDaGLGqVY0Kv82h3yGNTFqWSiV48bpa3ugPK19SjlGV9QGVA=w280-e365-c-rw-lo-l100 2x, https://lh3.googleusercontent.com/x5eHfb7dCmFbllwNyt7F_ZPKhH_YmQIh5IVXd1bsdyYXiAo8FZGL5_gDaGLGqVY0Kv82h3yGNTFqWSiV48bpa3ugPK19SjlGV9QGVA=w140-e365-c-rw-lo-l100" type="image/webp"></source>
                      <img alt="an animated illustration of the project" className="card-Img-Img" height="190" width="190" src={require(`../assets/imgs/cardHead/${this.props.image.toLowerCase()}.svg`)}></img>
                    </picture>

                  </div>
                  <h4 className="cardTitle">
                    <span className="cardTitle-Span">
                      {this.props.title}
                    </span>
                    
                  </h4>
                  <p className="card-Description">
                    {"" + this.props.description + ""}
                  </p>
                  <svg aria-hidden="true" focusable="false" viewBox="0 0 36 16" className="card-Arrow"><path d="M28 0l-1.41 1.41L32.17 7H0v2h32.17l-5.58 5.59L28 16l8-8z"></path></svg>
                </div>
            </span>              
          </Link>
         </article>
        
      </li> 
    )
  }
  
}


export default WorksItem;
