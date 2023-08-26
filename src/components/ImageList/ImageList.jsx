import useImageList from "../../hooks/useImageList";
import Image from "../Image/Image";
import './ImageList.css'

function ImageList(){

   const[imageListState,setImageListState] = useImageList();
   

    return (
        <div className="image-list-wrapper">
        {imageListState.isLoading 
        ? '...Loading '
        :
        <div className="images-wrapper">
            {console.log(imageListState)}
            {imageListState.imageList.map((p)=><Image  title={p.title} description = {p.description} image = {p.url} id={p.id}/>)}
            </div>}
        </div>
    )

   

}



export default ImageList;