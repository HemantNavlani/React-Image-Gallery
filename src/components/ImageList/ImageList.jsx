import useImageList from "../../hooks/useImageList";
import Image from "../Image/Image";
import './ImageList.css'

function ImageList(){

   const[imageListState,setImageListState] = useImageList();
    return (
        <div className="image-list-wrapper">
        {imageListState.isLoading 
        ? <h3>  ...Loading</h3>
        :     
       imageListState.imageList.map((p)=><Image key={p.id} title={p.title} description = {p.description} image = {p.url} id={p.id}/>)
        }
        </div>
    )

   

}



export default ImageList;