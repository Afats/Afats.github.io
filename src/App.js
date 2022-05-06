import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Loader from './components/Loader/Loader'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Loader />
    </div>
  )
}

export default App
