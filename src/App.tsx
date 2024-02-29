import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'
import { Header } from './components/Header'
import { Gallery } from './components/Gallery'


function App() {
  // const [count, setCount] = useState(0)



  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
