import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const images = [
    'https://via.placeholder.com/300x200?text=Image+1',
    'https://via.placeholder.com/300x200?text=Image+2',
    'https://via.placeholder.com/300x200?text=Image+3',
  ];

  return (
    <div className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery image ${index + 1}`} />
      ))}
    </div>
  );
}

export default App
