import SeriesButtons from './SeriesButtons';
interface props {
    series: number;
    name: string;
    muscle: string;
}
const Session = ({series, name, muscle} : props) => {
  return (
    <div>
        <header className="py-4 border-b-2">
            <h2 className='text-2xl font-bold'>{muscle} - {name}</h2>
        </header>
      <SeriesButtons series={series} /> {/* Example usage with 5 series */}
    </div>
  );
};

export default Session;
