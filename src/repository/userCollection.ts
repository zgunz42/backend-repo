import { db } from '../config/firebaseConfig';

const USERS_COLLECTION = 'USERS';

export const updateUser = async (uid: string, data: any) => {
  try {
    await db.collection(USERS_COLLECTION).doc(uid).set(data, { merge: true });
    return { success: true };
  } catch (error) {
    throw new Error('Failed to update user data');
  }
};

export const fetchUser = async (uid: string) => {
  try {
    const doc = await db.collection(USERS_COLLECTION).doc(uid).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

