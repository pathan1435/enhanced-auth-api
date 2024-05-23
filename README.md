# Enhanced Auth API Documentation

This documentation provides details about the endpoints available in the Enhanced Auth API.

## Authentication Endpoints

### Register a New User

Registers a new user in the system.

- **URL:** `/auth/register`
- **Method:** `POST`
- **Request Body:**
  - `name` (string, required): The name of the user.
  - `email` (string, required): The email address of the user.
  - `password` (string, required): The password of the user.
- **Responses:**
  - `200 OK`: User registered successfully.
  - `400 Bad Request`: Invalid request format.

### Login

Allows an existing user to log in with their credentials.

- **URL:** `/auth/login`
- **Method:** `POST`
- **Request Body:**
  - `email` (string, required): The email address of the user.
  - `password` (string, required): The password of the user.
- **Responses:**
  - `200 OK`: User logged in successfully.
  - `400 Bad Request`: Invalid request format.

### Google OAuth2 Authentication

Initiates Google OAuth2 authentication.

- **URL:** `/auth/google`
- **Method:** `GET`
- **Responses:**
  - `302 Found`: Redirects to Google OAuth2 login page.

### Google OAuth2 Callback

Callback URL for Google OAuth2 authentication.

- **URL:** `/auth/google/callback`
- **Method:** `GET`
- **Responses:**
  - `302 Found`: Redirects to profile page after successful authentication.

## User Endpoints

### Get Current User's Profile

Retrieves the profile of the currently logged-in user.

- **URL:** `/user/me`
- **Method:** `GET`
- **Authentication:** Bearer token required
- **Responses:**
  - `200 OK`: Current user's profile retrieved successfully.
  - `401 Unauthorized`: User is not authenticated.

### Update Current User's Profile

Updates the profile of the currently logged-in user.

- **URL:** `/user/me`
- **Method:** `PUT`
- **Authentication:** Bearer token required
- **Request Body:**
  - `name` (string): The name of the user.
  - `bio` (string): The biography of the user.
  - `phone` (string): The phone number of the user.
  - `email` (string): The email address of the user.
  - `photo` (string): The URL of the user's photo.
  - `isPublic` (boolean): Indicates if the user's profile is public or private.
- **Responses:**
  - `200 OK`: Current user's profile updated successfully.
  - `401 Unauthorized`: User is not authenticated.
  - `500 Server Error`: Internal server error.

### Get List of User Profiles

Retrieves a list of user profiles.

- **URL:** `/user/profiles`
- **Method:** `GET`
- **Authentication:** Bearer token required
- **Responses:**
  - `200 OK`: List of user profiles retrieved successfully.
  - `401 Unauthorized`: User is not authenticated.

### Get User Profile by ID

Retrieves the profile of a user by their ID.

- **URL:** `/user/{id}`
- **Method:** `GET`
- **Authentication:** Bearer token required
- **Path Parameters:**
  - `id` (string, required): The ID of the user profile to retrieve.
- **Responses:**
  - `200 OK`: User profile retrieved successfully.
  - `401 Unauthorized`: User is not authenticated.
  - `403 Forbidden`: Access denied.
  - `404 Not Found`: User profile not found.
  - `500 Server Error`: Internal server error.
