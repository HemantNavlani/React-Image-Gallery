import { useParams } from "react-router-dom";
import useImageDetails from "../../hooks/useImageDetails";

function ImageDetails(){
    const {id} = useParams();
    const [imageDetails,setImageDetails] = useImageDetails(id);
    

    return (
    <div>
    <h1>{imageDetails.title}</h1>
    <h5>{imageDetails.description}</h5>
    <img src={imageDetails.url} alt="" />
    </div>
    )
}
export default ImageDetails;