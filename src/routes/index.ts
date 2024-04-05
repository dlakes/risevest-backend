import express from 'express';
import authRoute from './UserRoute';

const router = express.Router();

const allRoutes = [
  {
    path: '/',
    route: authRoute,
  },
];

allRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
