import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./ErrorPage";
import GameDetailPage from "./components/GameDetailPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/gameslodge/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
