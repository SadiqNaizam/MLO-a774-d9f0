import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import FormInput from './FormInput';
import PrimaryButton from './PrimaryButton';
import SecondaryLink from './SecondaryLink';

interface LoginFormProps {
  className?: string;
  onLoginSuccess?: (data: { username: string }) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ className, onLoginSuccess }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!username.trim() || !password.trim()) {
      setError("Username and password are required.");
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
      
      // Dummy success condition - replace with actual API logic
      if (username === "user@example.com" && password === "password123") {
        if (onLoginSuccess) {
          onLoginSuccess({ username });
        } else {
          // Placeholder for environments without a global router or state handler
          alert(`Login Successful for ${username}!`); 
        }
        setUsername(''); // Clear form on success
        setPassword('');
      } else {
        setError("Invalid username or password.");
      }
    } catch (apiError) {
      console.error("Login API error:", apiError);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [username, password, onLoginSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex flex-col gap-4 p-6 bg-card text-card-foreground rounded-lg shadow-lg w-[320px]",
        className
      )}
      noValidate
    >
      <h1 className="text-2xl font-bold text-foreground">
        Log in
      </h1>
      
      <FormInput
        id="username"
        label="Username"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
        required
        disabled={isLoading}
        aria-describedby={error ? "login-error-message" : undefined}
      />
      
      <FormInput
        id="password"
        label="Password"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
        required
        disabled={isLoading}
        aria-describedby={error ? "login-error-message" : undefined}
      />
      
      {error && (
        <p id="login-error-message" className="text-sm text-destructive text-center" role="alert">
          {error}
        </p>
      )}
      
      <PrimaryButton type="submit" disabled={isLoading} className="mt-2">
        {isLoading ? 'Logging in...' : 'Log in'}
      </PrimaryButton>
      
      <SecondaryLink to="/signup" className="text-center">
        or, sign up
      </SecondaryLink>
    </form>
  );
};

export default LoginForm;
