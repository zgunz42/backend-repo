import { Express } from 'express';
import { updateUserData, fetchUserData } from '../controller/api';
import authMiddleware from '../middleware/authMiddleware';

export default function (app: Express) {;
    app.put('/update-user-data', authMiddleware, updateUserData);
    app.get('/fetch-user-data', authMiddleware, fetchUserData);
}
