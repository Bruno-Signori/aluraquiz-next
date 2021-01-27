import React from 'react';

const inputClass = [`mt-4 w-11/12 bg-gray-lightest m-2.5 p-2  rounded-md focus:outline-none focus:ring focus:border-gray-dark text-sm`]

const SectionHomeOne: React.FC = () => {
  return (
    <>
    <div className="mb-4 border-2 bg-opacity-900  bg-gray-darkest  overflow-hidden rounded-xl ">
      <div className=" rounded-xl">
        <h1 className="text-lg font-bold p-4 pl-7 h-14 bg-blue-light leading-6">Lion Quiz</h1>
        <input className={`${inputClass} m-3.5`} placeholder="Digite seu nome para jogar"></input>

      </div>
      </div>

      <div className="mb-4 border-2 bg-opacity-900  bg-gray-darkest  overflow-hidden rounded-xl ">
      <div className="text-gray mt-2    ">
        <h1 className=" text-gray text-lg font-bold p-4  leading-6">Quiz da galera</h1>
        <p className="text-sm pl-4 p-1 ">Da uma olhada nesses quizes incriveis </p>
        <input className={`${inputClass}`} placeholder="Digite seu nome para jogar"></input>
      </div>
      </div>
</>
  )}

export default SectionHomeOne;