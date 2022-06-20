import React, { useState, useEffect } from 'react';
import { getHoroscope } from './services/api';

export const Horoscope = ({ sign, timeframe }) => {
    const [horoscope, setHoroscope] = useState([]);

    useEffect(() => {
        getHoroscope(sign, timeframe).then(setHoroscope);
      }, [sign, timeframe]);

    return <div className="horoscope-reading">
    <h2>Hello { sign }, here is your horoscope for { timeframe }</h2>
    <p>{horoscope}</p>
    </div>;
};