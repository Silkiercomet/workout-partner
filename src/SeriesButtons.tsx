import React, { useState } from 'react';

interface SeriesButtonsProps {
  series: number;
}

const SeriesButtons: React.FC<SeriesButtonsProps> = ({ series }) => {
  const [buttonStates, setButtonStates] = useState(Array(series).fill(false));

  const handleClick = () => {
    const newButtonStates = [...buttonStates];
    newButtonStates[newButtonStates.indexOf(false)] = true;
    setButtonStates(newButtonStates);
  };

  return (
<div className="grid grid-rows-1 gap-2 pt-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(1fr,80px))] ">
      {Array.from({ length: series }).map((_, index) => (
        <button
          key={index}
      className={` rounded-xl cursor-pointer duration-300 ease-in-out text-white font-extrabold py-2 px-4 ${buttonStates[index] ? 'bg-green-600' : 'bg-secondary'}`}
          onClick={() => handleClick()}
          disabled={buttonStates[index]}
        >
          Round {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SeriesButtons;
