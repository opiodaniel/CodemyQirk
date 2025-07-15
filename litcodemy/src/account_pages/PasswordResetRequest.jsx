import { useState } from "react";
import API from "../account_api/auth";

function PasswordResetRequest() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/password-reset/", { email });
      alert("Reset link sent. Check your email.");
    } catch (err) {
      alert("Error: " + JSON.stringify(err.response.data));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Forgot Password?</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded">Send Reset Link</button>
    </form>
  );
}

export default PasswordResetRequest;
