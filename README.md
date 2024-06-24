# Backend Repository

This repository contains the backend implementation using Express.js and Firebase for authentication and Firestore database.

## Directory Structure

```
backend-repo/
├── config/
│   └── firebaseConfig.ts
├── controller/
│   └── api.ts
├── core/
│   └── app.ts
├── entities/
│   └── ApiError.ts
├── middleware/
│   └── authMiddleware.ts
├── repository/
│   └── userCollection.ts
├── routes/
│   └── userRoutes.ts
└── package.json
```

## Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Firebase Configuration**

   Set up Firebase by creating a `firebaseConfig.ts` file in the `config` directory with your Firebase project credentials.

3. **Run Locally**

   To run the backend server locally:

   ```bash
   npm run dev
   ```

## Endpoints

### `update-user-data`

- **Description:** Updates current user status Firestore data in the USERS collection.
- **Method:** PUT
- **Endpoint:** `/update-user-data`

### `fetch-user-data`

- **Description:** Fetches Firestore data in the USERS collection.
- **Method:** GET
- **Endpoint:** `/fetch-user-data`

## Middleware

### `authMiddleware`

- **Description:** Middleware to validate the request token.
- **Location:** `middleware/authMiddleware.ts`

## Error Handling

Custom error handling with an `ApiError` class for standardized error responses.

## Notes
Login Credential <br>
email: adi_gunawan@live.com <br>
password: 123456
