import { useState, useEffect } from "react";

import "./App.css";
import Session from "./Session";
import Form from "./Form";
export interface props {
  series: boolean[];
  name: string;
  muscle: string;
}
function App() {
  const [showForm, setShowForm] = useState(false);
  const [workout, setWorkout] = useState<props[]>([]);
  useEffect(() => {
    const storedWorkout = localStorage.getItem("workout");
    if (storedWorkout) {
      setWorkout(JSON.parse(storedWorkout));
    }
    console.log(storedWorkout)
  }, []);

  useEffect(() => {
    localStorage.setItem("workout", JSON.stringify(workout));
  }, [workout]);
  const handleForm = () => setShowForm(!showForm);
  const resetWorkout = () => setWorkout([]);
  const updateSeries = (index: number, newSeries: boolean[]) => {
    const newWorkout = [...workout];
    newWorkout[index].series = newSeries;
    setWorkout(newWorkout);
  };
  return (
    <div className="bg-light-pink min-h-[100vh] p-4 text-font-primary relative">
      <header className="flex justify-center">
        <h1 className="flex gap-4 items-center font-bold text-3xl">
          Workout Partner{" "}
          <figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="#000000"
              height="40px"
              width="40px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 55 55"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    className="fill-primary"
                    d="M43,21.139V8.747C43,3.924,39.076,0,34.252,0H20.748C15.924,0,12,3.924,12,8.747v12.392C8.781,24.87,7,29.593,7,34.5    C7,45.804,16.196,55,27.5,55S48,45.804,48,34.5C48,29.593,46.219,24.87,43,21.139z M14,8.747C14,5.026,17.027,2,20.748,2h13.505    C37.973,2,41,5.026,41,8.747v10.136v5.799c0,0.799-0.406,1.526-1.085,1.946c-0.68,0.418-1.511,0.457-2.224,0.1l-1.427-0.714    C35.484,25.624,35,24.841,35,23.969v-8.541V11.26C35,9.462,33.538,8,31.74,8h-8.48C21.462,8,20,9.462,20,11.26v4.168v8.541    c0,0.218-0.03,0.43-0.088,0.633c-0.173,0.606-0.592,1.12-1.177,1.412l-0.713,0.357l-0.713,0.357    c-0.357,0.179-0.743,0.258-1.125,0.241s-0.76-0.132-1.099-0.341C14.406,26.208,14,25.48,14,24.682v-5.799V8.747z M33,14.78    c-3.618-1.018-7.382-1.018-11,0v-3.52c0-0.694,0.565-1.26,1.26-1.26h8.48c0.695,0,1.26,0.565,1.26,1.26V14.78z M27.5,53    C17.299,53,9,44.701,9,34.5c0-3.592,1.051-7.08,3-10.067v0.249c0,1.497,0.76,2.86,2.034,3.647    c0.636,0.393,1.344,0.607,2.061,0.639c0.425,0.019,0.852-0.034,1.27-0.144c0.286-0.075,0.568-0.172,0.841-0.308l1.426-0.714    c1.461-0.73,2.37-2.199,2.37-3.834v-7.115c3.608-1.133,7.392-1.133,11,0v7.115c0,0.409,0.057,0.807,0.165,1.186    c0.324,1.137,1.109,2.1,2.204,2.648l1.427,0.714c0.01,0.005,0.021,0.008,0.031,0.013c0.151,0.074,0.304,0.139,0.459,0.194    c0.054,0.019,0.11,0.032,0.165,0.049c0.113,0.035,0.226,0.07,0.341,0.095c0.064,0.014,0.129,0.023,0.193,0.034    c0.107,0.019,0.213,0.037,0.32,0.047c0.069,0.007,0.137,0.009,0.206,0.012c0.068,0.003,0.137,0.012,0.205,0.012    c0.031,0,0.061-0.006,0.092-0.006c0.106-0.002,0.211-0.012,0.317-0.022c0.081-0.008,0.162-0.014,0.242-0.026    c0.111-0.017,0.22-0.043,0.33-0.069c0.073-0.018,0.147-0.031,0.22-0.053c0.122-0.036,0.242-0.083,0.361-0.13    c0.058-0.023,0.117-0.041,0.174-0.066c0.175-0.078,0.348-0.168,0.514-0.271C42.24,27.542,43,26.179,43,24.682v-0.249    c1.949,2.987,3,6.476,3,10.067C46,44.701,37.701,53,27.5,53z"
                  />
                  <path
                    className="fill-primary"
                    d="M28,47c-0.001,0-0.002,0-0.003,0c-3.766,0-7.471-1.715-9.911-4.586c-0.358-0.42-0.989-0.472-1.41-0.114    c-0.421,0.357-0.472,0.988-0.115,1.409C19.376,47.022,23.651,49,27.997,49c0.001,0,0.002,0,0.003,0c0.553,0,1-0.448,1-1    C29,47.447,28.552,47,28,47z"
                  />
                  <path
                    className="fill-primary"
                    d="M15,34c0-0.552-0.447-1-1-1l0,0c-0.552,0-1,0.447-1,1c0,1.896,0.349,3.744,1.037,5.495    c0.155,0.394,0.532,0.634,0.931,0.634c0.122,0,0.246-0.022,0.366-0.069c0.514-0.202,0.767-0.783,0.564-1.297    C15.302,37.246,15,35.644,15,34z"
                  />
                </g>
              </g>
            </svg>
          </figure>
        </h1>
      </header>
      <main className="relative">
        {workout.length !== 0 && (
          <button
            onClick={() => resetWorkout()}
            className="absolute right-4 top-2 bg-fuxia py-2 px-4 rounded-md font-bold text-white cursor-pointer"
          >
            Reset
          </button>
        )}
        {workout.map((e, i) => (
          <Session
            key={`${e.name}#${i}`}
            series={e.series}
            name={e.name}
            muscle={e.muscle}
            index={i}
            updateSeries={updateSeries}
          />
        ))}
      </main>
      <footer
        className="flex cursor-pointer items-center justify-center fixed left-4 right-4 bottom-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] bg-primary text-white font-medium rounded-md "
        onClick={() => handleForm()}
      >
        <button className="cursor-pointer p-4">Add new exercise +</button>
      </footer>
      <div
        className={`${
          showForm
            ? "top-[290px] opacity-100 h-[100%]"
            : "opacity-0 top-[100%] h-0"
        } fixed ease-in-out duration-300  left-4 right-4 bg-light-pink bg-opacity-50 z-50`}
      >
        <svg
          onClick={handleForm}
          className="absolute top-2 right-2 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#a21c1a"
        >
          <path
            d="M18 6L6 18"
            stroke="#a21c1a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M6 6L18 18"
            stroke="#a21c1a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <Form setWorkout={setWorkout} showForm={handleForm} />
      </div>
    </div>
  );
}

export default App;
