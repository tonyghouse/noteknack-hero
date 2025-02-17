
import ThemeContextDefaultProvider from "./context/ThemeContextProvider";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "./components/MasterLayout";
import Features from "./components/Features";

function App() {

  return (
    <>
     <ThemeContextDefaultProvider>
     {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<MasterLayout />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </ThemeContextDefaultProvider>
     
    </>
  )
}

export default App
