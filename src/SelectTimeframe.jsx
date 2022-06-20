import React from 'react';
import "./Astrology.css";

export const SelectTimeframe = ({onTimeframeSelected,}) => {
    return (
        <>
        <h2>Select a Time</h2>
        <div className="grid">
          {['Yesterday', 'Today', 'Tomorrow'].map((timeframes) => (
            <button className="timeframe" key={timeframes} onClick={() => onTimeframeSelected(timeframes)}>
                {timeframes}
            </button>
          ))}
          </div>
          </>
    )
}