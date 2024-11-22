import React from 'react'
import { useState } from 'react'

import Spinner from './Spinner'
import useGif from '../hooks/useGif'



const Tag = () => {

  
    const [tag, setTag] = useState('');
    const {gif, loading, fetchData} = useGif(tag);

    function changeHandler(e) {
      setTag(e.target.value);
        console.log(e.target.value);
    }

   
  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'>Random {tag} GIF</h1>

        {loading ? (<Spinner/>) : ( <img src={gif} alt="gif" width={450} />)}

        <input 
        type="text" 
          placeholder="Enter a tag"
          value={tag}
          className="w-10/12 p-2 border border-black rounded-lg text-lg mb-[3px] text-center"
          onChange={changeHandler}
        />
       
        <button className='w-10/12 bg-yellow-500 opacity-50 text-lg py-2 rounded-lg mb-[15px]' onClick={() => fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag