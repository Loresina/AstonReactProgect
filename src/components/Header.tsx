
import { useEffect } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment} from '../slices/firstSlice'

const Header = () => {
    const count = useSelector((state) => state.first.value);
    const dispatch = useDispatch();
  
    useEffect(() => {
      const key =  import.meta.env.VITE_KEY;
      fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${key}`)
      .then((resp) => resp.json())
      .then((data) => console.log(data.items))
    }, [])


    return (
        <>
        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h3>Redux toolkit считает это</h3>
        <div className="card">
            <button onClick={() => dispatch(increment())}>
                count is {count}
            </button>
        </div>
        </>
    )
}

export { Header }