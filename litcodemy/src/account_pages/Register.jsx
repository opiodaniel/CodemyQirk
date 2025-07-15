import { useState } from "react";
import API from "../account_api/auth";

function Register() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/register/", form);
      alert("Registration successful!");
    } catch (err) {
      alert("Error: " + JSON.stringify(err.response.data));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto mt-10">
      <h2 className="text-xl font-bold">Register</h2>
      {["username", "email", "password", "password2"].map((field) => (
        <input
          key={field}
          type={field.includes("password") ? "password" : "text"}
          name={field}
          placeholder={field}
          value={form[field]}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Register</button>
    </form>
  );
}

export default Register;
