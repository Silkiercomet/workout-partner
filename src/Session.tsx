import SeriesButtons from './SeriesButtons';
interface props {
    series: number;
    name: string;
    muscle: string;
}
const Session = ({series, name, muscle} : props) => {
  return (
    <div>
        <header>
            <h2>{muscle} - {name}</h2>
        </header>
      <SeriesButtons series={series} /> {/* Example usage with 5 series */}
    </div>
  );
};

export default Session;
