import { useParams } from "react-router-dom";
import useImageDetails from "../../hooks/useImageDetails";
import './ImageDetails.css'

function ImageDetails(){
    const {id} = useParams();
    const [imageDetails,setImageDetails] = useImageDetails(id);
    

    return (
    <div className="image-details-wrapper">
    <img src={imageDetails.url}  id = 'single-image' alt="" />
    <div className="inner">
    <h1>{imageDetails.title}</h1>
    <p>{imageDetails.description}</p>
    </div>
    </div>
    )
}
export default ImageDetails;