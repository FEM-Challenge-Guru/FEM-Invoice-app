import Auth_page from "./pages/auth page/Auth_page";
import Invoices_page from "./pages/invoices page/Invoices_page";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthenticationStore } from './stores';
import ProtectedRoute from "./components/ProtectedRoute";
import Page_not_found from "./pages/404 page/Page_not_found";
import Overview from "./pages/overview page/Overview";
import View_invoice from "./pages/view invoice page/View_invoice";
import { Tooltip as ReactTooltip } from 'react-tooltip'

function App() {
  const { isAuthenticated } = useAuthenticationStore();


  return (
    <>
    <ReactTooltip
      id="info-tooltip"
      place="bottom"
      type="info"
      effect="solid"
      delayShow={100}
      style={{zIndex: 500, backgroundColor: 'hsl(233, 30%, 21%)'}}
    />

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
        <Route path="/invoices" element={<ProtectedRoute element={<Invoices_page />} />}>
          <Route index element={<Overview />} />
          <Route path="view-invoice" element={<View_invoice />} />
        </Route>

        {/* Displays page-not-found for unknown routes */}
        <Route path="*" element={<Page_not_found />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App