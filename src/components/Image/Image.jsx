import './Image.css'
function Image({title,description,image,id}){
    return(
        <div className="image">
        <img src = {image}></img>
        </div>
    )

}

export default Image;