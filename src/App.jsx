import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageList from './components/ImageList/ImageList'
import { Link } from 'react-router-dom'
import CustomRoutes from './routes/CustomRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='main'>
   <h1 className='title'>
    <Link to='/'>
    React Image Gallery Project
    </Link>
    </h1>
    <CustomRoutes/>
   </div>
  )
}

export default App
