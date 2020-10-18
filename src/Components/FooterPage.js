import React from "react";
import '../styles/footer.css';
import { Link } from 'react-router-dom';


const FooterPage = () => {
  return (
    <footer className="footer-Style">
        <div className="footer-Content">
            <div className="footer-Row">
            <div className="socials-Holder">
                                    <ul className="social-links">
                                        <li className="social-links-wrap">
                                            <a href="https://linkedin.com/in/liam-kiniry-7578b2132" className="social-links__link">
                                                <span style={{backgroundColor:'rgb(52, 120, 255)', display: 'flex'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" aria-labelledby="linkedInTitle linkedInDesc"><title id="linikedInTitle">Link to LinkedIn</title>
                                                    <desc id="linkedInDesc">LinkedIn Logo</desc> <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"></path></svg>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="social-links-wrap">
                                            <a href="https://codepen.io/liamarcherkiniry" className="social-links__link">
                                                <span style={{backgroundColor: 'rgb(255, 92, 154)', display: 'flex'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" aria-labelledby="codepenTitle codepenDesc"><title id="codepenTitle">Link to Codepen</title>
                                                    <desc id="codepenDesc">Codepen Logo</desc> <path d="M11.995 2.281l9.005 4.966v9.685l-9 4.802-9-4.802v-9.744l8.995-4.907zm.005-2.281l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm.01 10.871l5.787-2.976-5.797-3.098-5.705 3.018 5.715 3.056zm-1.01 1.728l-6-3.208v6.185l6 3.077v-6.054zm2 .011v6.043l6-3.077v-6.051l-6 3.085z"></path></svg>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="social-links-wrap">
                                            <a href="https://www.behance.net/lak6gbdefb" className="social-links__link">
                                                <span style={{backgroundColor:'#2ec6d1', display: 'flex'}}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" aria-labelledby="behanceTitle behanceDesc"><title id="behanceitle">Link to Behance</title>
                                                    <desc id="behanceDesc">Behance Logo</desc> <path d="M18 8.101h-4v-.875h4v.875zm.84 6.125c-.77 2.258-5.949 2.966-5.949-1.56 0-4.583 5.508-4.377 6.053-.872.045.295.062.693.055 1.249h-4.41c-.104 1.715 1.76 1.932 2.404 1.184h1.847zm-4.211-2.333h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.858 4.076h-3.771v-8.73h4.056c3.194.047 3.255 3.176 1.587 4.028 2.019.735 2.086 4.702-1.872 4.702zm-1.896-5.134h1.965c1.464 0 1.696-1.859-.182-1.859h-1.783v1.859zm1.854 1.454h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm3.271-10.289c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"></path></svg>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
             </div>

            </div>
        </div>
    </footer>
  );
}

export default FooterPage;