import Topbar from "./components/Topbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import SinglePostPage from "./pages/SinglePostPage";
import WritePage from "./pages/WritePage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Context } from "./context/Context";
import { useContext } from "react";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <div className="bg-gray-100">
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <RegisterPage />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginPage />}
          />
          <Route
            path="/write"
            element={user ? <WritePage /> : <Navigate to="/register" />}
          />
          <Route
            path="/profile/:id"
            element={user ? <ProfilePage /> : <Navigate to="/register" />}
          />
          <Route path="/posts/:postId" element={<SinglePostPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
