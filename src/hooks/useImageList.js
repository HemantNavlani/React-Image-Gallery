import axios from "axios";
import { useEffect, useState } from "react";

function useImageList(offset){

    const [imageListState,setImageListState]  = useState({
        imageList:{},
        isLoading:true,
        url:`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset}&limit=20`,
        nextUrl:'',
        prevUrl:'',
        totalPhotos:0
    });



    async function downloadImages(){
        try{
            setImageListState((state)=>({...state,isLoading:true}))
            const response = await axios.get(imageListState.url)
            
            const imageResults = response.data.photos;


            setImageListState((state)=>({...state,isLoading:false,imageList:imageResults,totalPhotos:response.data.total_photos}))
            setImageListState((state)=>({
                ...state,
                nextUrl:`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset+20}&limit=20`,
                prevUrl:`https://api.slingacademy.com/v1/sample-data/photos?offset=${offset-20}&limit=20`,
            }))
        }
        catch(e){
            console.log('Something went wrong')
        }
    
    }



    useEffect(()=>{
        downloadImages()
    },[imageListState.url])


    return [imageListState,setImageListState]

}

export default useImageList;