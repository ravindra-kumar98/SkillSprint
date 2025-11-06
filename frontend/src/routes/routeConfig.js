export const ROUTES = {
  //Public Routes
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  COURSES: "/courses",
  COURSE_DETAIL: "/course/:id",
};


// Helper to generate dynamic routes
export const generatePath = {
    courseDetail: (id) => `/course/${id}`,
};