import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const loginPage = lazy(() => import("../features/auth/Login"));
const RegisterPage = lazy(() => import("../features/auth/Register"));
const CoursesPage = lazy(() => import("../pages/CoursesPage"));
const CourseDetailpage = lazy(() => import("../pages/CourseDetail"));
const AboutPage = lazy(() => import("../pages/About"));

export const publicRoutes = [
  {
    path: "/",
    element: HomePage,
    title: "Home",
  },
  {
    path: "/login",
    element: loginPage,
    title: "Log In",
    auth: true,
  },
  {
    path: "/register",
    element: RegisterPage,
    title: "Create new account",
    auth: true,
  },
  {
    path: "/courses",
    element: CoursesPage,
    title: "Courses",
  },
  {
    path: "courses/:id",
    element: CourseDetailpage,
    title: "Course Detail",
  },
  {
    path: "/about",
    element: AboutPage,
    title: "About",
  },
];
