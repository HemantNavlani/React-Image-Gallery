import { Route, Routes } from 'react-router-dom'
import ImageList from '../components/ImageList/ImageList';
import ImageDetails from '../components/ImageDetails/ImageDetails';

function CustomRoutes(){
    return(
        <Routes>
            <Route path='/' element={<ImageList/>}></Route>
            <Route path='/image/:id' element={<ImageDetails/>}></Route>
        </Routes>
    )
}

export default CustomRoutes;