import React from 'react';
import "./About.css";
import Card from 'react-bootstrap/Card';

function About() {

    return (
        <Card className="about-page">
          <Card.ImgOverlay className="about-body">
            <Card.Title><h2>about | earthangel</h2></Card.Title>
            <Card.Text className="about-text">
            The social media ascendance of mystics, angels, and the #EarthAngelofInstagram is one of the greatest uses of Internet of our time — period. One of the most enchanting of them all is Michelle — also know as @theearthangel — who delivers a heady mix of astrology knowledge, mystical visuals, self-care wisdom, and some legit #bigangelenergy on her website!
            </Card.Text>
          </Card.ImgOverlay>
          </Card>
          );
}

export default About;