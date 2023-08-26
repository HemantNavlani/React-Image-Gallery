import { useState } from "react";
import useImageList from "../../hooks/useImageList";
import Image from "../Image/Image";
import './ImageList.css'

function ImageList(){

    const [offset,setOffset] = useState(0);
   const[imageListState,setImageListState] = useImageList(offset);

    return (
        <div>
        <div className="image-list-wrapper">
        {imageListState.isLoading 
        ? <h3>  ...Loading</h3>
        :     
       imageListState.imageList.map((p)=><Image key={p.id} title={p.title} description = {p.description} image = {p.url} id={p.id}/>)
        }
        </div>

        <div className="buttons">
            <button disabled={offset<=0} onClick={()=>{
                
                const urlToSet = imageListState.prevUrl;
                console.log('2',imageListState)
                setOffset(offset-20)
                setImageListState({
                    ...imageListState,
                    url:urlToSet
                })
            }}
            >Prev</button>



            <button disabled={offset+20>=imageListState.totalPhotos} onClick={()=>{
                const urlToSet = imageListState.nextUrl;
                setOffset(offset+20)
                setImageListState({
                    ...imageListState,
                    url:urlToSet
                })
            }}
            >Next</button>
        </div>
        </div>
    )

   

}



export default ImageList;