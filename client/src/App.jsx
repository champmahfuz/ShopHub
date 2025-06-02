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

// import React from "react";
// import ReactDOM from "react-dom/client";
// import RouterProvider from "react-router-dom";

// import Login from "./Pages/Login";
// import Register from "./Pages/Register";
// import Dashboard from "./component/Dashboard";
// import ShopPage from "./component/ShopPage";

// const router = createBrowserRouter([
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },

//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/shop/:shopName",
//     element: <ShopPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// export default router;

// App.jsx

// Import your router configuration
import { RouterProvider } from "react-router-dom";
import router from "../Router/Router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
