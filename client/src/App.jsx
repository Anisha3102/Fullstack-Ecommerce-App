import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Private from "./components/Routes/Private.jsx";
import Dashboard from "./pages/user/Dashboard.jsx";
import AdminRoute from "./components/Routes/AdminRoute.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import CreateCategory from "./pages/admin/CreateCategory.jsx";
import CreateProduct from "./pages/admin/CreateProduct.jsx";
import Users from "./pages/admin/Users.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Private />}>
        <Route path="user" element={<Dashboard />} />
      </Route>

      <Route path="/dashboard" element={<AdminRoute />}>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/createCategory" element={<CreateCategory />} />
        <Route path="admin/createProduct" element={<CreateProduct />} />
        <Route path="admin/users" element={<Users />} />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
