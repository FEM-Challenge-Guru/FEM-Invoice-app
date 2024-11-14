import Auth_page from "./pages/auth page/Auth_page";
import Invoices_page from "./pages/invoices page/Invoices_page";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthenticationStore } from './stores';
import ProtectedRoute from "./components/ProtectedRoute";
import Page_not_found from "./pages/404 page/Page_not_found";


function App() {
  const { isAuthenticated } = useAuthenticationStore();


  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* Redirect root path "/" to "/invoices" or "/login" if user is unauthenticated*/}
        <Route path="/" element={isAuthenticated ? <Navigate to="/invoices" /> : <Navigate to="/login" />} />

        {/* Authentication routes */}
        <Route path="/login" element={<Auth_page />} />
        <Route path="/signup" element={<Auth_page />} />
        <Route path="/forgot-password" element={<Auth_page />} />
        <Route path="/reset-password" element={<Auth_page />} />

        {/* Authentication protected routes */}
        <Route path="/invoices" element={<ProtectedRoute element={<Invoices_page />} />} />

        {/* Displays page-not-found for unknown routes */}
        <Route path="*" element={<Page_not_found />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App