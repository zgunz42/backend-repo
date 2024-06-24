import 'dotenv/config'
import app from './core/app';
import * as functions from 'firebase-functions';

export const api = functions.https.onRequest(app);
