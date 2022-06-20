import React, { useState } from 'react';
import "./Astrology.css";
import { SelectSign } from './SelectSign';
import { SelectTimeframe } from './SelectTimeframe';
import { Horoscope } from './Horoscope';

const Astrology = () => {
    const [selectedSign, setSelectedSign] = useState([null]);
    const [selectedTimeframe, setSelectedTimeframe] = useState(null);

    const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }

  return (
    <div className="astrology-page">
      <h2>zodiac | signs</h2>
      <p>"The perfect app for the current moment."</p>
      {!selectedSign && (
        <SelectSign onSignSelected={setSelectedSign} />
      )}
      {selectedSign && !selectedTimeframe && (
        <SelectTimeframe onTimeframeSelected={setSelectedTimeframe} />
      )}
      {selectedTimeframe && <Horoscope sign={selectedSign} timeframe={selectedTimeframe}/>}
      <button id="restart" onClick={restart}>Start Again</button>
    </div>
  );
}

export default Astrology;