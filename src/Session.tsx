import SeriesButtons from './SeriesButtons';
interface props {
    series: boolean[];
    name: string;
    muscle: string;
    index: number;
    updateSeries: (index: number, newSeries: boolean[]) => void
}
const Session = ({series, name, muscle, index, updateSeries} : props) => {
  return (
    <div>
        <header className="py-4 border-b-2">
            <h2 className='text-2xl font-bold'>{muscle} - {name}</h2>
        </header>
      <SeriesButtons series={series} index={index} updateSeries={updateSeries} /> {/* Example usage with 5 series */}
    </div>
  );
};

export default Session;
