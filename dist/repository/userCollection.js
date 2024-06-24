"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.updateUser = void 0;
const firebaseConfig_1 = require("../config/firebaseConfig");
const USERS_COLLECTION = 'USERS';
const updateUser = (uid, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield firebaseConfig_1.db.collection(USERS_COLLECTION).doc(uid).set(data, { merge: true });
        return { success: true };
    }
    catch (error) {
        throw new Error('Failed to update user data');
    }
});
exports.updateUser = updateUser;
const fetchUser = (uid) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doc = yield firebaseConfig_1.db.collection(USERS_COLLECTION).doc(uid).get();
        if (doc.exists) {
            return doc.data();
        }
        else {
            throw new Error('User not found');
        }
    }
    catch (error) {
        throw new Error('Failed to fetch user data');
    }
});
exports.fetchUser = fetchUser;
