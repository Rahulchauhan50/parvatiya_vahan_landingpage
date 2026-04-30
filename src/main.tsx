import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App.tsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import TermsConditionsPage from './pages/TermsConditionsPage.tsx';
import AccountDeletionPage from './pages/AccountDeletionPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
        <Route path="/account-deletion" element={<AccountDeletionPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
