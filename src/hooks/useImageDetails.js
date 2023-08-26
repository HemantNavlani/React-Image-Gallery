import axios from "axios";
import { useEffect, useState } from "react";

function useImageDetails(id){


        const [imageDetails,setImageDetails] = useState({});


        async function imageInfo(){
            try{
                const response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
            console.log('res', response);
            const image = response.data.photo;
            console.log('Image',image)
            setImageDetails({
                    title:image.title,
                    description:image.description,
                    url :image.url
            })
            }
            catch(e){
                console.log("Something went wrong")
            }
        }
        useEffect(()=>{
            imageInfo();
        },[])
        
        return [imageDetails,setImageDetails];
    
    
   
}

export default useImageDetails;

 
