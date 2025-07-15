import { useState } from "react";
import API from "../account_api/auth";

function ChangePassword() {
  const [form, setForm] = useState({
    old_password: "",
    new_password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put("/change-password/", form);
      alert("Password changed successfully!");
    } catch (err) {
      alert("Error: " + JSON.stringify(err.response.data));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Change Password</h2>
      {["old_password", "new_password"].map((field) => (
        <input
          key={field}
          type="password"
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      ))}
      <button className="bg-green-600 text-white px-4 py-2 rounded">Change Password</button>
    </form>
  );
}

export default ChangePassword;
