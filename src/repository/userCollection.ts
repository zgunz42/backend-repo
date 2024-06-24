import { db } from '../config/firebaseConfig';

const USERS_COLLECTION = 'USERS';

export const updateUser = async (uid: string) => {
  try {
    const selfDoc = await db.collection(USERS_COLLECTION).doc(uid).get();
    if (!selfDoc.exists) {
      throw new Error('User not found');
    }

    const status = selfDoc.data()?.status === "online" ? "offline" : "online";

    await db.collection(USERS_COLLECTION).doc(uid).set({
      status,
    }, { merge: true });
    return { success: true };
  } catch (error) {
    throw new Error('Failed to update user data');
  }
};

export const fetchUser = async () => {
  try {
    const collections = await db.collection(USERS_COLLECTION).get();
    
    const user = collections.docs
      .map((doc) => ({ ...doc.data(), uid: doc.id }));
    return user;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

