"use client" 
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; 

const RegistrationPage = () => {
  const [formType, setFormType] = useState('signin'); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (formType === 'signup' && (!firstName || !lastName)) {
      setError('Please fill in all fields');
      return;
    }
    
    if (!email || !password) {
      setError('Email and password are required');
      return;
    }

    // Reset error
    setError('');

    // Here you would typically make an API call to register or sign in
    console.log(formType === 'signin' 
      ? { email, password }
      : { firstName, lastName, email, password }
    );
  };

  return (
    <div className="flex min-h-screen">
      {/* Form Section */}
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-6">
          {formType === 'signin' ? 'Welcome Back!' : 'Create an Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {formType === 'signup' && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className={error && !firstName ? 'border-red-500' : ''}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className={error && !lastName ? 'border-red-500' : ''}
                />
              </div>
            </div>
          )}

          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={error && !email ? 'border-red-500' : ''}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={error && !password ? 'border-red-500' : ''}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm">{error}</div>
          )}

          <Button type="submit" className="w-full">
            {formType === 'signin' ? 'Sign In' : 'Sign Up'}
          </Button>

          <div className="text-center">
            {formType === 'signin' ? (
              <>
                <a href="#" className="text-sm text-blue-600 mr-2">Forgot password?</a>
                <button 
                  type="button"
                  onClick={() => setFormType('signup')}
                  className="text-sm text-blue-600"
                >
                  Don't have an account? Sign up
                </button>
              </>
            ) : (
              <button 
                type="button"
                onClick={() => setFormType('signin')}
                className="text-sm text-blue-600"
              >
                Already have an account? Sign in
              </button>
            )}
          </div>

          <div className="flex items-center justify-center">
            <hr className="w-1/4 border-gray-300 mr-4" />
            <span className="text-gray-500">or</span>
            <hr className="w-1/4 border-gray-300 ml-4" />
          </div>

          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </form>
      </div>

      {/* Image Section */}
      <div className="w-1/2 bg-gray-100 grid grid-cols-2 gap-4 p-8">
        {/* Placeholder for image grid */}
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-gray-200 h-full rounded-lg" />
        ))}
      </div>
    </div>
  );  
};

export default RegistrationPage;