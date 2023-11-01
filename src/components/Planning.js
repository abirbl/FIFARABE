import React from 'react';
import match from  './images/match1.jpeg';
import match2 from  './images/match2.jpeg';
import logo from './images/logobgcopy.png';

function Planning() {
  return (
    <div className="bg">
        <div>     
        <body>  
            <div className="header1">
                <img src={logo}></img>
                <a href="#" class="logo"><span class="lodo"><span class="fff">F</span>if<span class="aaa">A</span>rabe</span></a>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/">Translation</a>
                    <a href="/weather">Weather</a>
                    <a href="/islam">Islamic culture</a>
                    <a href="/match">Matches</a>
                </nav> 
            </div>
        </body>
        </div>
        <img className="imageM" src={match2}></img>
        <img className="imageMA" src={match}></img>
        <section id="footer">
            <div class="footer__container">
                <div class="footer__logo">
                    <img className="logologo" src={logo}/>
                    <a href="#" className="logo">
                        <span class="lodo">
                            <span class="fff">F</span>
                            if
                            <span class="aaa">A</span>
                            rabe
                        </span>
                    </a>
                </div>
                <p class="website__rights">
                    © FifArabe 2023. All rights reserved
                </p>
            </div>      
        </section>   
    </div>
  )}export default Planning;