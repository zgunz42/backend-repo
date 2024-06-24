class ApiError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }

  static badRequest(msg: string) {
    return new ApiError(msg, 400);
  }

  static internal(msg: string) {
    return new ApiError(msg, 500);
  }
}

export default ApiError;

