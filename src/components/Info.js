import React from 'react';
import logo from '../img/SS-Logo.png'

class Info extends React.Component {
    render() {
        return(
        <article>
        <h1>Welcome to my environment</h1>
        <img src={logo} alt="shahrzad" />
        <p className='Intro'>Hello, This is Shahrzad. Together we will make a creative experience!</p>
    
        <section id='about'>
            <h2>About Me</h2>
            <p>
            Studio.89 (2021 - present)<br />Senior Graphic Designer<br />Studio.89 is a social enterprise project of YTGA. Youth Troopers for Global Awareness is a youth-led non profit mobilizing and empowering young people for social justice through the arts.
            </p>
            <br />
            <p>
             The Healthy Home (2020 - 2021)<br />Brand Manager<br />The Healthy Home is a wellness and health service provider. I am managing the whole branding, social media, content creation, UI and also website.
            </p>
        </section>
    
        <section id="skills">
            <h2>Professional Skills</h2>
            <l><li>Adobe Creative Suit</li></l>
            <l><li>Content Creation</li></l>
            <l><li>Photography</li></l>
            <l><li>SEO</li></l>
        </section>
        </article>
        )
    }
}

export default Info;