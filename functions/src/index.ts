import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../../src/routes/userRoutes';

admin.initializeApp();

const app = express();
app.use(bodyParser.json());
app.use('/api', userRoutes);

export const api = functions.https.onRequest(app);
