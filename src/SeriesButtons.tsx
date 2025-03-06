import React, { useState } from 'react';

interface SeriesButtonsProps {
  series: boolean[];
  index:number;
  updateSeries: (index: number, newSeries: boolean[]) => void;
}

const SeriesButtons: React.FC<SeriesButtonsProps> = ({ series, index, updateSeries }) => {
  const [buttonStates, setButtonStates] = useState(series);

  const handleClick = () => {
    const newButtonStates = [...buttonStates];
    newButtonStates[newButtonStates.indexOf(false)] = true;
    setButtonStates(newButtonStates);
    updateSeries(index, newButtonStates)
  };

  return (
<div className="grid grid-rows-1 gap-2 pt-4 grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(1fr,80px))] ">
      {series.map((_, index) => (
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
