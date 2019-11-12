import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import MeetUpController from './app/controllers/MeetUpController';
import SubscriptionController from './app/controllers/SubscriptionController';
import ListController from './app/controllers/ListController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/meetups', MeetUpController.store);
routes.put('/meetups/:id', MeetUpController.update);
routes.get('/meetups', MeetUpController.index);
routes.delete('/meetups/:id', MeetUpController.destroy);
routes.get('/list', ListController.index);

routes.get('/subscriptions', SubscriptionController.index);
routes.post('/meetups/:meetup_id/subscriptions', SubscriptionController.store);

export default routes;
