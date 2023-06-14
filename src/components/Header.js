import React from "react";
import troll from "./images/Troll Face.png";


const Head = () => {
    return (
        <header className="header">
            <img src={troll} alt="meme face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
            
    )
}

export default Head;