import axios from "axios";
import { useEffect, useState } from "react";

function useImageList(){
    const [imageListState,setImageListState]  = useState({
        imageList:{},
        isLoading:true,
    });


    async function downloadImages(){
        setImageListState((state)=>({...state,isLoading:true}))

    const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
    // console.log(response)

    const imageResults = response.data.photos;
    // console.log(imageResults);

    setImageListState((state)=>({...state,isLoading:false,imageList:imageResults}))
    }

    useEffect(()=>{
        downloadImages()
    },[])

    return [imageListState,setImageListState]

}

export default useImageList;