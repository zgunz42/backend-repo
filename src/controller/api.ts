import { Request, Response, NextFunction } from 'express';
import { updateUser, fetchUser } from '../repository/userCollection';
import ApiError from '../entities/ApiError';

export const updateUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uid = res.locals.uid;
    const data = req.body;
    const result = await updateUser(uid, data);
    res.json(result);
  } catch (error) {
    next(ApiError.internal('Failed to update user data'));
  }
};

export const fetchUserData = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const uid = res.locals.uid;
    const user = await fetchUser(uid);
    res.json(user);
  } catch (error) {
    next(ApiError.internal('Failed to fetch user data'));
  }
};

