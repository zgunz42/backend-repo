import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from '../routes/userRoutes';
import ApiError from '../entities/ApiError';

const app = express();

app.use(bodyParser.json());

userRoutes(app);

// Global error handler
app.use((err: ApiError, req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.status(err.statusCode || 500).json({
    message: err.message || 'Internal Server Error',
  });
});

export default app;

