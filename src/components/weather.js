import React, {useState} from 'react';
import logo from './images/logobgcopy.png';
const api = {
    key: "40fb516d0200e4c72ec55a5ab2a08dee",
    base: "https://api.openweathermap.org/data/2.5/"}

function Weather(){
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    // @ts-ignore
    var search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    }
    const dateBuilder = ({d}: { d: any }) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`
    }
    return(
      <div className="app">
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
        <main>
          <div className="search-box">
            <input className="search-bar" type="text" placeholder="search..."
                   onChange={e => setQuery(e.target.value)}
                   value={query}
                   onKeyPress={search}/>
          </div>
            {(typeof weather.main != "undefined") ? (
                <div className="hey">
                    <div>
                        <div className="location-box">
                            <div className="location">{weather.name}, {weather.sys.country}</div>
                            <div className="date">{dateBuilder({d: new Date()})}</div>
                        </div>
                    </div>
                    <div className="weather-box">
                        <div className="temp">
                            {Math.round(weather.main.temp)}°c
                        </div>
                        <div className="weather">{weather.weather[0].main}</div>
                    </div>
                </div>) : ('')}
        </main>
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
  );
}
export default Weather;