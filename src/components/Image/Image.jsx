import { Link } from 'react-router-dom';
import './Image.css'
function Image({title,description,image,id}){
    return(
        <Link to={`/image/${id}`}>
        <div className="image">
        <img src = {image}></img>
        </div>
        </Link>
    )

}

export default Image;