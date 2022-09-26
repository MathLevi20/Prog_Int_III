import { useState } from "react"
import { Formula } from "./Formula"

export function Forms() {

  const [peso, setPeso] = useState<number | any>();
  const [altura, setAltura] = useState<number | any>();
  const [bmi, setBmi] = useState<number>();
  const [info, setInfo] = useState<string>();

  const handleBmi = () => {
    let val = (
      Formula({ peso, altura })
    );

    setBmi(Number(val.toFixed(1)));
    console.log(typeof (val))
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };

  return (
    <>
      <div className="flex  flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="items-center sm:justify-center text-4xl font-bold text-purple-600">
              BMI
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg grid place-items-center">
          <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
              <label className=" rounded-lg pr-1">     Altura:

              </label>

              <input type="text"
                value={altura}
                onChange={(event) => setAltura(event.target.value)}
                placeholder='Digite sua altura aqui..'
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />

            </div>
            <div className="md:flex md:items-center mb-6">
              <label className="pr-1 rounded-lg">   Peso:

              </label>

              <input type="text"
                value={peso}
                onChange={(event) => setPeso(event.target.value)}
                placeholder='Digite seu peso aqui..'
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />

            </div>

          </form>
          <button className="w-full px-10 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" onClick={handleBmi}>Calculate</button>
          <div className="grid px-10 py-10 place-items-center text-purple-600 font-bold ">
            <h1>{bmi}</h1>
            <h2>{info}</h2>
          </div>
        </div>


      </div>

    </>
  )
}