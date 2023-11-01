import React, {useState, useEffect} from 'react';
import logo from './images/logobgcopy.png';
import about1 from './images/unnamed-removebg-preview.png';
import about2 from './images/abt.jpeg';
import about3 from './images/fifa_22.webp';
import axios from 'axios';
import {  Form, Badge } from "react-bootstrap";
import { useDebounce } from "use-debounce";


export default function Translate({ translatorref }) {
    const RAPID_API_KEY = "b761c97be5msh24916c312d541f2p1febbajsnce01723b3ac3";
    const API_URL = "https://microsoft-translator-text.p.rapidapi.com/translate";
  
    const [textIn, setTextIn] = useState("Hello");
    const [textOut, setTextOut] = useState("");
    const [detectedLanguage, setDetectedLanguage] = useState();
  
    const [value] = useDebounce(textIn, 500);
  
    useEffect(() => {
      const TranslateText = async () => {
        if (!value) return;
  
        const options = {
          method: "POST",
          url: API_URL,
          params: {
            "to[0]": "ar",
            "api-version": "3.0",
            profanityAction: "NoAction",
            textType: "plain",
          },
          headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": RAPID_API_KEY,
            "X-RapidAPI-Host": "microsoft-translator-text.p.rapidapi.com",
          },
          data: `[{"Text":"${value}"}]`,
        };
  
        const { data } = await axios.request(options);
  
        setDetectedLanguage(data[0]?.detectedLanguage.language);
        setTextOut(data[0]?.translations[0]?.text);
      };
  
      TranslateText();
    }, [value]);
  
    useEffect(() => {
      if (!textIn) {
        setTextOut("");
        setDetectedLanguage("");
      }
    }, [textIn]);
  
    return ( 
        <><div>
            <body>
                <div className="header1">
                    <img src={logo}></img>
                    <a href="#" className="logo">
                        <span class="lodo">
                            <span class="fff">F</span>
                            if
                            <span class="aaa">A</span>
                            rabe
                        </span>
                    </a>
                    <nav class="navbar">
                        <a href="/">Home</a>
                        <a href="#trad">Translation</a>
                        <a href="/weather">Weather</a>
                        <a href="/islam">Islamic culture</a>
                        <a href="/match">Matches</a>
                    </nav>
                </div>
            </body>
        </div><div>
                <section className="about" id="about">
                    <div className="image-container">
                        <img src={logo} className="image" />
                        <div class="controls">
                            <span className="control-btn" data-src={logo}></span>
                            <span className="control-btn" data-src={about1}></span>
                            <span className="control-btn" data-src={about3}></span>
                            <span className="control-btn" data-src={about2}></span>
                            {document.querySelectorAll('.about .image-container .controls .control-btn').forEach(btn => {
                                btn.onclick = () => {
                                    let src = btn.getAttribute('data-src');
                                    document.querySelector('.about .image-container .image').src = src;
                                };
                            })}
                        </div>
                    </div>
                    <div className="content">
                        <span>Why choose us?</span>
                        <h3>FifArabe </h3>
                        <p>We will help you discover our language.
                            You will find the weather forecast during your stay in Qatar.
                            Also you can find the match schedules here.
                        </p>
                        <a href="#" class="btn">More..</a>
                    </div>
                </section>
            </div><div className="app_translate">
                <div className="container">
                    <div className="wrapper" id="trad">
                        <div className="text-input">
                            <div className="translator " ref={translatorref}>
                                <h2 className="ara">Translate To Arabic</h2>
                                        <Form.Control
                                            as="textarea"
                                            className="textarea"
                                            placeholder="Enter text (any language)"
                                            value={textIn}
                                            onChange={(e) => setTextIn(e.target.value)}
                                        />
                                        {detectedLanguage ? (
                                            <Badge className="detected-language">
                                                {detectedLanguage}
                                            </Badge>
                                        ) : null}
                                    
                                        <Form.Control
                                            as="textarea"
                                            className="textarea"
                                            placeholder="Translation (in Arabic)"
                                            value={textOut}
                                            onChange={() => false}
                                            style={{ textAlign: "right" }}
                                        />
                                    
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
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
    </>
    )
    }
