"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
    static badRequest(msg) {
        return new ApiError(msg, 400);
    }
    static internal(msg) {
        return new ApiError(msg, 500);
    }
}
exports.default = ApiError;
