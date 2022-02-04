import React from 'react';
import logo from '../img/SS-Logo.png'

class Info extends React.Component {
    render() {
        return(
        <article>
        <h1>Welcome to my environment.</h1>
        <img src={logo} alt="shahrzad" />
        <p className='Intro'>Hello, This is Shahrzad. Together we will make a creative experience!</p>
    
        <section id='about'>
            <h2>about me</h2>
            <p>
            Studio.89 (2021 - present)<br />Senior Graphic Designer<br />Studio.89 is a social enterprise project of YTGA. Youth Troopers for Global Awareness is a youth-led non profit mobilizing and empowering young people for social justice through the arts.
            </p>
            <br />
            <p>
             The Healthy Home (2020 - 2021)<br />Brand Manager<br />The Healthy Home is a wellness and health service provider. I am managing the whole branding, social media, content creation, UI and also website.
            </p>
        </section>
    
        <section id="contact">
            <h2>get in touch</h2>
            <l>
                <li><a href="https://www.linkedin.com/in/shahrzad-samimi-118961128">LinkedIn</a></li>
            </l>
            <l>
                <li><a href="https://twitter.com/shahrzadsam">Twitter</a></li>
            </l>
            <l>
                <li><a href="https://www.instagram.com/shahrzad.samimi/">Instagram</a></li>
            </l>
        </section>
        </article>
        )
    }
}

export default Info;