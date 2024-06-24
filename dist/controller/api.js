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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUserData = exports.updateUserData = void 0;
const userCollection_1 = require("../repository/userCollection");
const ApiError_1 = __importDefault(require("../entities/ApiError"));
const updateUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = res.locals.uid;
        const data = req.body;
        const result = yield (0, userCollection_1.updateUser)(uid, data);
        res.json(result);
    }
    catch (error) {
        next(ApiError_1.default.internal('Failed to update user data'));
    }
});
exports.updateUserData = updateUserData;
const fetchUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const uid = res.locals.uid;
        const user = yield (0, userCollection_1.fetchUser)(uid);
        res.json(user);
    }
    catch (error) {
        next(ApiError_1.default.internal('Failed to fetch user data'));
    }
});
exports.fetchUserData = fetchUserData;
