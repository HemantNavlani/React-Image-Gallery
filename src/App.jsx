import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageList from './components/ImageList'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   React Image Gallery Project
   <ImageList/>
   </>
  )
}

export default App
