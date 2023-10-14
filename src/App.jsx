import { ToastContainer } from "react-toastify"
import { HomePage } from "./pages/HomePage"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <HomePage />
      <ToastContainer /* position="botton-right" */ autoClose = { 0.5 * 1000}/>
    </>
  )
}

export default App
