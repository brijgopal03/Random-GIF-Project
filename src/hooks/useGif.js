
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

// REACT_APP_GIPHY_API_KEY='it4feaCptxPUatAIDOyt35jB2qwPoDbE';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Randomurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;


const useGif = (tag) => {
   
    const [gif, setGif] = useState('')
   
    const [loading, setLoading] = useState(false)


    async function fetchData(tag) {
        setLoading(true);
     
    const response =  await axios.get(tag ? `${Randomurl}&tag=${tag}&rating=r`  : Randomurl);
        const imageSrc = response.data.data.images.downsized_large.url;
        console.log(imageSrc);
        setGif(imageSrc);  
        setLoading(false);
    }

    useEffect(() => {
        fetchData('boobs');
        // console.log(API_KEY);
    }, [])      

   return {gif, loading, fetchData};
  
}

export default useGif