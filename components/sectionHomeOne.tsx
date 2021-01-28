import React, { useState } from 'react';
import {useRouter} from 'next/router'

const inputClass = [`mt-4 w-11/12 bg-gray-lightest m-2.5 p-2 rounded-md focus:outline-none focus:ring focus:border-gray-dark text-sm`]

const SectionHomeOne: React.FC = () => {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
    <div className="mb-4 border-2 bg-opacity-900  bg-gray-darkest  overflow-hidden rounded-xl ">
      <div className=" rounded-xl r">
        <h1 className="text-lg font-bold p-4 pl-7 h-14 bg-blue-light leading-6">Lion Quiz</h1>
        <form className="block justify-center ali" onSubmit={function(e){
          e.preventDefault();
          router.push(`/quiz?name=${name}`)

          router
          console.log('fazendo a sub')
        }}>
        <input onChange={function (infoEvent){
          setName(infoEvent.target.value);
        } }
         className={`${inputClass} m-3.5`} placeholder="Digite seu nome para jogar"></input>
        <button 
         className="flex disabled:opacity-40 m-auto justify-center rounded-md p-2 hover:bg-opacity-75 focus:ring border-gray-dark text-lg my-2 bg-blue-light w-2/4" 
          type="submit"
          disabled={name.length === 0}
        >Player: {name}</button>
        </form>
      </div>
      </div>

      <div className="mb-4 border-2 bg-opacity-900  bg-gray-darkest  overflow-hidden rounded-xl ">
      <div className="text-gray mt-2    ">
        <h1 className=" text-gray text-lg font-bold p-4  leading-6">Quiz da galera</h1>
      </div>
      </div>
</>
  )}

export default SectionHomeOne;