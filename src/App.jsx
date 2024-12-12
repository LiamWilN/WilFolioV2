import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/index";
import NotFound from "./routes/notfound";
import Projects from "./pages/projects";
import Home from "./pages/home";
import Work from "./pages/work";
import ThemeProvider from "./context/themeContext";
import About from "./pages/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "about-me",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
