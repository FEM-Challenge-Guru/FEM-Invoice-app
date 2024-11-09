import Login_signup from "./pages/login-signup page/Login_signup";
import { BrowserRouter, Route, Routes,  } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_signup />} />
        <Route path="/login" element={<Login_signup />} />
        <Route path="/signup" element={<Login_signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App