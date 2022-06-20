import React, { useEffect, useState } from 'react';
import "./Astrology.css";
import { getSigns } from './services/api';

export const SelectSign = ({ onSignSelected }) => {
    const [signs, setSigns] = useState([]);

    useEffect(() => {
      getSigns().then(setSigns);
    }, []);

return (
    <>
    <div className="selectsign">
    <p>Select your Sun, Moon, or Rising Sign</p>
    <div>
      {signs.map((sign) => (
        <button className="sign" key={sign} onClick={() => onSignSelected(sign)}>
            {sign}
        </button>
      ))}
      </div>
      </div>
      </>
)
};