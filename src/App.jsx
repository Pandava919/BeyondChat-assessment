import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm'
import OrganizationSetup from './components/OrganizationSetup'
import ChatbotIntegration from './components/ChatbotIntegration'
import Navbar from './components/ui/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Otp from './components/Otp';
import TestIntegration from './components/TestIntegration';
import Footer from './components/ui/Footer';

function App() {
  const [organization, setOrganization] = useState(null);

  const handleOrganizationSetup = (orgData) => {
    setOrganization((prev) => prev = orgData);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/verify' element={<Otp />} />
          <Route path='/org-setup' element={<OrganizationSetup onSetup={handleOrganizationSetup} />} />
          <Route path='/bot-integration' element={<ChatbotIntegration organization={organization} />} />
          <Route path='/test-integration' element={<TestIntegration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;