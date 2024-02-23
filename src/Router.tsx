import { Route, Routes } from "react-router-dom";
import Root from "./Root";
import LandingPage from "./pages/LandingPage";
import NotAuthRoutes from "./Components/NotAuthRoutes";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="" element={<LandingPage />} />
        {/* 로그인 안 한 사람만 */}
        <Route element={<NotAuthRoutes />}>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
        </Route>

        {/* 로그인 한 사람만 */}
        <Route element={<ProtectedRoutes />}></Route>
      </Route>
    </Routes>
  );
}

export default Router;
