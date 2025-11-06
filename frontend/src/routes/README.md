# Routes Documentation

## Route Flow Diagram
```
User visits route
      ↓
Is it public? → YES → Show page
      ↓ NO
Is user logged in? → NO → Redirect to /login
      ↓ YES
Does user have required role? → NO → Redirect to /unauthorized
      ↓ YES
Show page
```

## Route Structure

### Public Routes (Anyone can access)
- `/` - Home
- `/login` - Login page
- `/register` - Register page
- `/courses` - All courses
- `/courses/:id` - Course detail

### Student Routes (Role: student)
- `/student/dashboard` - Student dashboard
- `/student/my-courses` - Student's enrolled courses
- `/student/profile` - Student profile

### Admin Routes (Role: admin)
- `/admin/dashboard` - Admin dashboard
- `/admin/courses` - Manage all courses
- `/admin/courses/create` - Create new course
- `/admin/users` - Manage users

## How Protection Works

1. **Public routes** - No authentication required
2. **Protected routes** - Must be logged in
3. **Role-based routes** - Must have specific role (student/admin)

## Adding New Routes

1. Add route constant to `routeConfig.js`
2. Add route config to appropriate file:
   - `publicRoutes.jsx` for public
   - `studentRoutes.jsx` for students
   - `adminRoutes.jsx` for admins
3. Import and add to `routes/index.jsx`