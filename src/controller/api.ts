import { Request, Response, NextFunction } from 'express';
import { updateUser, fetchUser } from '../repository/userCollection';
import ApiError from '../entities/ApiError';

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uid = (req as any).user.uid;
    const result = await updateUser(uid);
    res.json(result);
  } catch (error) {
    next(ApiError.internal('Failed to update user data'));
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await fetchUser();

    for (const u of user) {
      if (u.uid === (req as any).user.uid) {
        (u as any).self = true
      }
    }

    res.json(user);
  } catch (error) {
    next(ApiError.internal('Failed to fetch user data'));
  }
};

