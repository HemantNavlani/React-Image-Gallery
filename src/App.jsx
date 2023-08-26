import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageList from './components/ImageList/ImageList'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='main'>
   <h1 className='title'>React Image Gallery Project</h1>
   <ImageList/>
   </div>
  )
}

export default App
