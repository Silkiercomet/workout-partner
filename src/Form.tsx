
import { props } from './App';
interface FormProps{
    setWorkout : React.Dispatch<React.SetStateAction<props[]>>;
    showForm : () => void
}
interface formatedProps {
    muscle: string;
    series: boolean[];
    name: string;
}
import { useForm } from 'react-hook-form';

const Form: React.FC<FormProps> = ({ setWorkout, showForm }) => {
    const { register, handleSubmit, watch, setValue, reset } = useForm({
        defaultValues: {
          muscle: '',
          series: 4,
          name: '',
          otherMuscleGroup: ""
        },
      });
    const muscleGroup = watch('muscle');
  
    const onSubmit = (data: any) => {
    const formatedData: formatedProps = {
        muscle: data.name === 'other' ? data.otherMuscleGroup : data.name,
        series: Array(data.series).fill(false),
        name: data.name
    }
    setWorkout(prevWorkout => [...prevWorkout, formatedData]);
      reset();
      showForm()
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 grid bg-gray-100 rounded-lg shadow-md gap-4">
      <fieldset className="border border-gray-300 p-4 rounded-md">
        <legend className="text-lg font-medium mb-2">Muscle Group</legend>
        <div className="flex items-center space-x-4 gap-2.5">

          <label>
            <input type="radio" {...register('muscle')} value="legs" className='hidden' />
            <span className={`cursor-pointer py-2 px-4 ease-in-out duration-300 text-white rounded-md ${muscleGroup === 'legs' ? 'bg-green-600' : 'bg-secondary'}`}>Legs</span>
          </label>
          <label>
            <input type="radio" {...register('muscle')} value="back" className='hidden' />
            <span className={`cursor-pointer py-2 px-4 ease-in-out duration-300 text-white rounded-md ${muscleGroup === 'back' ? 'bg-green-600' : 'bg-secondary'}`}>Back</span>
          </label>
          <label>
            <input type="radio" {...register('muscle')} value="chest" className='hidden' />
            <span className={`cursor-pointer py-2 px-4 ease-in-out duration-300 text-white rounded-md ${muscleGroup === 'chest' ? 'bg-green-600' : 'bg-secondary'}`}>Chest</span>
          </label>
          <label>
            <input type="radio" {...register('muscle')} value="other" className='hidden' />
            <span className={`cursor-pointer flex gap-2 ease-in-out duration-300 py-2 px-4 text-white rounded-md ${muscleGroup === 'other' ? 'bg-green-600' : 'bg-secondary'}`}>Other
            {muscleGroup === 'other' && (
              <input
                type="text"
                {...register('otherMuscleGroup')}
                className="border border-gray-300 rounded px-2 bg-white"
                placeholder="Specify muscle group"
              />
            )}
            </span>

          </label>
        </div>
      </fieldset>

      <div className="mt-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          {...register('name', { required: true })}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="series" className="block text-gray-700 font-medium mb-1">
          Series
        </label>
        <div className="flex items-center space-x-2 *:h-10">
          <button
            type="button"
            onClick={() => setValue('series', Math.max(0, watch('series') - 1))}
            className="border border-gray-300 rounded px-2 py-1"
          >
            -
          </button>
          <input
            type="number"
            id="series"
            {...register('series', { valueAsNumber: true, min: 0, required: true })}
            className="border appearance-none border-gray-300 rounded px-3 py-2 w-16 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={() => setValue('series', watch('series') + 1)}
            className="border border-gray-300 rounded px-2 py-1"
          >
            +
          </button>
        </div>
      </div>

      <button type="submit" className="cursor-pointer mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </form>
  );
};

export default Form;
