import { FilterProvider } from './context/FilterContext'
import CssBaseline from '@mui/material/CssBaseline'
import MainPage from './pages/MainPage'
import './App.css'

const App = () => {
  return (
    <>
      <CssBaseline/>
      <FilterProvider>
        <MainPage/>
      </FilterProvider>
    </>
  )
}
export default App
