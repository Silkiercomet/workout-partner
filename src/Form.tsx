
import { props } from './App';
interface FormProps{
    setWorkout : React.Dispatch<React.SetStateAction<props[]>>;
    showForm : () => void
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
      setWorkout(prevWorkout => [...prevWorkout, data]);
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
            <span className='py-2 px-4 bg-secondary text-white rounded-md'>Legs</span>
          </label>
          <label>
            <input type="radio" {...register('muscle')} value="back" className='hidden' />
            <span className='py-2 px-4 bg-secondary text-white rounded-md'>Back</span>
          </label>
          <label>
            <input type="radio" {...register('muscle')} value="chest" className='hidden' />
            <span className='py-2 px-4 bg-secondary text-white rounded-md'>Chest</span>
          </label>
          <label>
            <input type="radio" {...register('muscle')} value="other" className='hidden' />
            <span className='flex gap-2 py-2 px-4 bg-secondary text-white rounded-md'>Other
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
