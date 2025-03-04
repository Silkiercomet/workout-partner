import React, { useState } from 'react';

interface SeriesButtonsProps {
  series: number;
}

const SeriesButtons: React.FC<SeriesButtonsProps> = ({ series }) => {
  const [buttonStates, setButtonStates] = useState(Array(series).fill(false));

  const handleClick = (index: number) => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = true;
    setButtonStates(newButtonStates);
  };

  return (
    <div>
      {Array.from({ length: series }).map((_, index) => (
        <button
          key={index}
          className={buttonStates[index] ? 'active' : ''}
          onClick={() => handleClick(index)}
          disabled={buttonStates[index]}
        >
          Round {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SeriesButtons;
