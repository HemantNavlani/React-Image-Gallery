import axios from "axios";
import { useEffect, useState } from "react";
import useImageList from "../hooks/useImageList";
import Image from "./Image";

function ImageList(){

   const[imageListState,setImageListState] = useImageList();
   

    return (
        <>
        {imageListState.isLoading 
        ? '...Loading '
        :
        <div>
            Hello
            {console.log(imageListState)}
            <ul>
            {imageListState.imageList.map((p)=><li key={p.id}><Image title={p.title} description = {p.description} image = {p.url} id={p.id}/></li>)}
            </ul>
            </div>}
        </>
    )

   

}



export default ImageList;