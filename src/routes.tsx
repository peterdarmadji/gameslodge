import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/gameslodge/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> },
    ],
  },
  { 
    path: "*", 
    element: <ErrorPage /> 
  },
]);

export default router;
