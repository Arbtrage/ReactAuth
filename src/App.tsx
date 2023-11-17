// import { Avatar } from "@nextui-org/react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage";
import Profile from "./pages/profilePage";

export default function App() {
  return (
    <div className="min-h-full h-screen flex items-center justify-center sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
