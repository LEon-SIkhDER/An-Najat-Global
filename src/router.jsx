import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import CoursesPage from "./Pages/Courses/CoursesPage";
import AboutPage from "./Pages/About/AboutPage";
import HowItWorksPage from "./Pages/HowItWorks/HowItWorksPage";
import ContactPage from "./Pages/Contact/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, Component: Home },
      { path: "/courses", Component: CoursesPage },
      { path: "/about", Component: AboutPage },
      { path: "/how-it-works", Component: HowItWorksPage },
      { path: "/contact", Component: ContactPage },
      // Aliases to seamlessly support direct links
      { path: "/faq", Component: ContactPage },
      { path: "/learning-options", Component: HowItWorksPage },
      { path: "/why-us", Component: AboutPage },
      { path: "/teachers", Component: AboutPage },
      { path: "/global", Component: AboutPage },
      { path: "/age-groups", Component: HowItWorksPage },
      { path: "*", Component: Home },
    ],
  },
]);

export default router;