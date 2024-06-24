import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json'; // Make sure to replace this with your actual service account key file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

const db = admin.firestore();
export { admin, db };

