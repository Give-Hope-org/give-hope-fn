import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import DonationFormPage from './pages/DonationFormPage';
import MedicalDonationFormPage from "./pages/MedicalDonationFormPage";
import OrganDonationFormPage from "./pages/OrganDonationFormPage";
import OrganRequestFormPage from "./pages/OrganRequestFormPage";
import BloodDonationFormPage from "./pages/BloodDonationFormPage";
import BloodRequestFormPage from "./pages/BloodRequestFormPage";
import EquipmentDonationFormPage from "./pages/EquipmentDonationFormPage";
import EquipmentRequestFormPage from "./pages/EquipmentRequestFormPage";
import FinanceDonationFormPage from "./pages/FinanceDonationFormPage";
import FinanceRequestFormPage from "./pages/FinanceRequestFormPage";
import OrganDonationProfilePage from "./pages/OrganDonationProfilePage";
import BloodDonationProfilePage from "./pages/BloodDonationProfilePage";
import EquipmentDonationProfilePage from "./pages/EquipmentDonationProfilePage";
import FinanceDonationProfilePage from "./pages/FinanceDonationProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import ConfirmDonationPage from "./pages/ConfirmDonationPage";
import ChartyProfilePage from "./pages/ChartyProfilePage";
import MedicalProfile from "./pages/MedicalProfilePage";
import Dashboard from "./components/Dashboard/Dashboard";
function App() {
  return (
    <div> 
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="donation-form" element={<DonationFormPage/>} />
          <Route path="medical-donation-form" element={<MedicalDonationFormPage/>} />
          <Route path="organ-donation-form" element={<OrganDonationFormPage/>} />
          <Route path="organ-request-form" element={<OrganRequestFormPage/>} />
          <Route path="blood-donation-form" element={<BloodDonationFormPage/>} />
          <Route path="blood-request-form" element={<BloodRequestFormPage/>} />
          <Route path="equipment-donation-form" element={<EquipmentDonationFormPage />} />
          <Route path="equipment-request-form" element={<EquipmentRequestFormPage />} />
          <Route path="finance-donation-form" element={<FinanceDonationFormPage />} />
          <Route path="finance-request-form" element={<FinanceRequestFormPage />} />
          <Route path="organ-description" element={<OrganDonationProfilePage />} />
          <Route path="blood-description" element={<BloodDonationProfilePage />} />
          <Route path="equipment-description" element={<EquipmentDonationProfilePage />} />
          <Route path="financial-description" element={<FinanceDonationProfilePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="contact-us" element={<ContactUsPage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="confirm-donation" element={<ConfirmDonationPage />} />
          <Route path="charity-profile" element={<ChartyProfilePage />} />
          <Route path="medical-profile" element={<MedicalProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

