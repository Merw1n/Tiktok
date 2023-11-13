import './App.css'
import FinishPage from './pages/FinishPage/FinishPage'
import TaskPage from './pages/TaskPage/TaskPage'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Toaster} from "react-hot-toast"
import WaitingPage from './pages/WaitingPage/WaitingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/complete" element={<FinishPage />} />
        <Route path="/waiting" element={<WaitingPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
