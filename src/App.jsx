import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/index";
import NotFound from "./routes/notfound";
import Projects from "./routes/projects";
import Home from "./routes/home";
import Work from "./routes/work";
import ThemeProvider from "./context/themeContext";
import About from "./routes/aboutme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
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
