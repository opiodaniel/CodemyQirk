import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./account_pages/Register";
import ChangePassword from "./account_pages/ChangePassword";
import PasswordResetRequest from "./account_pages/PasswordResetRequest";
import PasswordResetConfirm from "./account_pages/PasswordResetConfirm";
import Login from "./account_pages/Login";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/login" element={<Login />} />
      {/* <Route
        path="/dashboard"
        element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }
      /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/reset-password" element={<PasswordResetRequest />} />
        <Route path="/reset-password-confirm/:uid/:token" element={<PasswordResetConfirm />} />
      </Routes>
    </Router>
  );
}

export default App;
