import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import DonationFormPage from './pages/DonationFormPage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ConfirmDonationPage from "./pages/ConfirmDonationPage";
import ChartyProfilePage from "./pages/ChartyProfilePage";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="donation-form" element={<DonationFormPage/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="confirm-donation" element={<ConfirmDonationPage />} />
          <Route path="charity-profile" element={<ChartyProfilePage />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

