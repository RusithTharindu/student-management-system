import Header from "./components/Header"
import AddStudent from "./components/AddStudent"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import ViewStudent from "./components/ViewStudent";

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ViewStudent/>}/>
            <Route path="/add" element={<AddStudent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
