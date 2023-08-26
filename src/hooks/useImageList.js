import axios from "axios";
import { useEffect, useState } from "react";

function useImageList(){
    const [imageListState,setImageListState]  = useState({
        imageList:{},
        isLoading:true,
    });


    async function downloadImages(){
        try{
            setImageListState((state)=>({...state,isLoading:true}))

            const response = await axios.get('https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20')
        
            const imageResults = response.data.photos;
        
            setImageListState((state)=>({...state,isLoading:false,imageList:imageResults}))
        }
        catch(e){
            console.log('Something went wrong')
        }

       
    }

    useEffect(()=>{
        downloadImages()
    },[])

    return [imageListState,setImageListState]

}

export default useImageList;