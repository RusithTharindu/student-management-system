import Header from "./components/Header"
import AddStudent from "./components/AddStudent"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom" 

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/add" element={<AddStudent/>}/>
        </Routes>
      </BrowserRouter>
      <div className="w-full h-[90vh] flex justify-center items-center text-[50px] font-semibold">
        Welcome to the student management system
      </div>
    </>
  )
}

export default App
