import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/Login/LoginForm';

/**
 * LoginPage serves as the primary interface for user authentication.
 * It utilizes MainAppLayout for overall page structure and centers the LoginForm component.
 * Upon successful login, it can trigger navigation or other side effects.
 */
const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  /**
   * Handles successful login attempts.
   * Typically, this would involve setting user session/token and navigating to a dashboard.
   * @param data - Object containing login data, e.g., { username: string }.
   */
  const handleLoginSuccess = (data: { username: string }) => {
    // The LoginForm component itself shows an alert if onLoginSuccess is not provided or if it doesn't handle alerts.
    // This alert is an additional confirmation at the page level.
    alert(`Login successful for ${data.username}. Navigating to a protected route (simulated)...`);
    
    // Example: Navigate to a dashboard page after successful login.
    // Ensure '/dashboard' route is configured in your application's router.
    navigate('/dashboard');
  };

  return (
    // MainAppLayout provides the overall page centering and card shell.
    // LoginForm is rendered as a child, providing the actual form inputs and logic.
    // Note: If LoginForm itself is styled as a full card (including padding, background, shadow),
    // and MainAppLayout also provides a card shell, there might be nested card styling.
    // This implementation assumes components are used as per the provided hierarchy.
    <MainAppLayout>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </MainAppLayout>
  );
};

export default LoginPage;
