import React from 'react';
import logo from './images/logobgcopy.png';

function Islam() {
  return (
    <div className="App">
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
        <main className="main-content">
            <section id="introduction" className="section">
                <h2>Introduction to Islam</h2>
                <p>Islam is a monotheistic religion based on the belief in a
                    only God, called Allah. Muslims follow the teachings
                    of the Prophet Muhammad, who is considered the last prophet
                    sent by God. One of the most important practices of Islam
                    is the pilgrimage to Mecca.
                </p>
            </section>
            <section id="pratiques" className="section">
                <h2>Practices of Islam</h2>
                <p>Muslims practice prayer five times a day,
                    fast during the month of Ramadan, and perform the pilgrimage
                    to Makkah at least once in their lifetime (called Hajj). He is
                    equally important to follow the teachings and precepts of
                    Islam, such as respect for parents and elders, the prohibition
                    alcohol and drug use, and respect for others.
                </p>
            </section>
            <section id="histoire" className="section">
                <h2>History of Islam</h2>
                <p>Islam was revealed to Muhammad in the 7th century in Mecca,
                    in Saudi Arabia. He quickly gained followers and
                    spread his religion throughout the Arabias through conquests
                    military. Islam then spread across South Africa.
                     North and Spain, and finally through Asia, India,
                     and Central Asia. Today, Islam is the second religion
                     the most widespread in the world, with more than 1 billion followers.
                </p>
            </section>
            <section id="communaute" className="section">
                <h2>Muslim community</h2>
                <p>The Muslim community is diverse and made up of people
                    from different countries and cultures. There are
                    differences in religious practices between different
                    groups, but Muslims are united in their belief in Allah
                    and in Muhammad as a prophet. Muslims participate regularly
                    in group activities, such as common prayer and the organization
                    charitable activities.
                </p>
            </section>
            <section id="arts" className="section">
                <h2>Arts and Culture of Islam</h2>
                <p>Islam has a rich artistic tradition that includes architecture,
                    calligraphy, textile arts, and decorative arts. The reasons
                    geometric figures are frequent in Islamic art, as well as the scenes
                    of nature and historical figures. Islam also has a
                    rich literary tradition, including poems, historical accounts,
                    and books of wisdom.
                </p>
            </section>
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

export default Islam;