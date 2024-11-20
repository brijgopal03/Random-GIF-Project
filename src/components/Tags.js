import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Spinner from './Spinner'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

    const [gif, setGif] = useState('')
    const [tag, setTag] = useState('')
    const [loading, setLoading] = useState(false)
    
    async function fetchData() {
        setLoading(true);
        // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}&rating=r`;
        const response =  await axios.get(url);
        const imageSrc = response.data.data.images.downsized_large.url;
        console.log(imageSrc);
        setGif(imageSrc);  
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])      

    function clickHandler() {
        fetchData();
    }

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
       
        <button className='w-10/12 bg-yellow-500 opacity-50 text-lg py-2 rounded-lg mb-[15px]' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag