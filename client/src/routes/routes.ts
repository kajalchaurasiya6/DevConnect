import ProfilePage from '@/features/users/components/Profile';
import { lazy } from 'react';

// Lazy-loaded components
const Login = lazy(() => import('../features/auth/components/Login'));
const Signup = lazy(() => import('../features/auth/components/Signup'));
const HomePage = lazy(() => import('../pages/HomePage'));

export const publicRoutes = [
    { path: '/login', element: Login },
    { path: '/signup', element: Signup },
];

export const layoutRoutes = [
    { path: '/', element: HomePage },
    { path: '/profile', element: ProfilePage },
    { path: '/settings', element: HomePage },
];
