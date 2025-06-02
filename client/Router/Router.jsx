// import { BrowserRouter, Route, Routes } from "react-router";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Dashboard from "./component/Dashboard";
// import Home from "./Pages/Home";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="login" element={<Login />} />
//           <Route path="register" element={<Register />} />
//           <Route path="dashboard" element={<Dashboard />} />
//           <Route path="/" element={<Home />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import Dashboard from "../src/component/Dashboard";
import ShopPage from "../src/component/ShopPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  //   {
  //     path: "/shop/:shopName",
  //     element: <ShopPage />,
  //   },
  // Add this catch-all route for subdomains
  {
    path: "/*",
    element: <ShopPage />,
  },
]);

export default router;
