import React from 'react';
import "./Splash.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Splash() {

    return (
        <Card className="splash-page">
          <Card.ImgOverlay className="splash-body">
            <Card.Title><h1>earth | angel</h1></Card.Title>
            <Card.Text className="splash-text">
            The universe is boundless, and it is time for us to awaken and merge into those deeper parts of ourselves and into the natural magic that is offered to us by this very planet we inhabit.
            </Card.Text>
          </Card.ImgOverlay>
          <Link to="/about"><Button id="splash-button">Enter</Button></Link>
          </Card>
          );
}

export default Splash;