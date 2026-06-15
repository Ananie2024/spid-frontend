import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';
import Navbar from './components/Layout/Navbar';
import Home from './pages/Public/Home';
import Projects from './pages/Public/Projects';
import Services from './pages/Public/Services';
import Contact from './pages/Public/Contact';
import Login from './pages/Public/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminProjects from './pages/Admin/Projects';
import AdminServices from './pages/Admin/Services';
import AdminInquiries from './pages/Admin/Inquiries';
import PrivateRoute from './components/Common/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <LanguageProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              
              <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
              <Route path="/admin/projects" element={<PrivateRoute><AdminProjects /></PrivateRoute>} />
              <Route path="/admin/services" element={<PrivateRoute><AdminServices /></PrivateRoute>} />
              <Route path="/admin/inquiries" element={<PrivateRoute><AdminInquiries /></PrivateRoute>} />
            </Routes>
          </div>
        </LanguageProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;