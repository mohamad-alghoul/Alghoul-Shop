import  { useState } from 'react';
import { auth } from '../../../firebaseConfig';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const handleResetPassword = async () => {
    try {
      await auth.sendPasswordResetEmail(email);
      setResetSent(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2 className="text-sm text-blue-600 hover:text-blue" onClick={()=>setOpen(!open)}>Forgot Password ?</h2>
      {open && (
        <>
          <input
             className="w-full p-2 outline-none border border-gray-300 rounded focus:ring focus:border-blue-300"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
          {resetSent && <p>Password reset email sent. Check your inbox.</p>}
          
        </>
      )}
    </div>
  );
};


