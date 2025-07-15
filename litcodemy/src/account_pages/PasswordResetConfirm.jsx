import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../account_api/auth";

function PasswordResetConfirm() {
  const { uid, token } = useParams();
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/password-reset-confirm/", {
        uidb64: uid,
        token,
        new_password: password,
      });
      alert("Password has been reset. Login now.");
    } catch (err) {
      alert("Error: " + JSON.stringify(err.response.data));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Reset Your Password</h2>
      <input
        type="password"
        placeholder="New password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded"
      />
      <button className="bg-purple-600 text-white px-4 py-2 rounded">Reset Password</button>
    </form>
  );
}

export default PasswordResetConfirm;
