import React from 'react';
import profilePic from "../../assets/images/profile-picture.jpg";


function About() {
    return (
        <section>
            <h1>About me</h1>
            <p>Hello! My name is Jacob Fay and I am currently attending a full stack computer coding bootcamp with UNCC. This is my portfolio which I have showcased a few projects of mine. After I complete the bootcamp I plan to switch careers and start my employment search in the IT industry.</p>
            <img src={profilePic} class="profilePic"></img>
        </section>
    );
    
}

export default About;