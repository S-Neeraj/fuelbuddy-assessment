# Task Management App - Local Development Setup

This is a task management app built using Node.js, PostgreSQL, and TypeScript. It includes functionality for user authentication, task management, and sharing tasks between users.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up the Database](#setting-up-the-database)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Testing the APIs](#testing-the-apis)
- [Additional Scripts](#additional-scripts)

---

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (v14 or higher)  
  You can check if Node.js is installed by running `node -v` in the terminal.
- **npm** (or **yarn** for package management)  
  Ensure npm is installed by running `npm -v`. Alternatively, you can use yarn.

- **PostgreSQL**  
  You must have PostgreSQL installed. You can download and install it from [PostgreSQL Downloads](https://www.postgresql.org/download/).

---

## Installation

1. **Clone the Repository**:

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-repository/task-management-app.git
   cd task-management-app
   ```

2. **Install Dependencies**:

   Run the following command to install the necessary dependencies for the project:

   ```bash
   npm install
   ```

   OR if you prefer to use `yarn`:

   ```bash
   yarn install
   ```

---

## Setting Up the Database

### 1. **Set Up PostgreSQL**

Ensure PostgreSQL is running on your local machine. You can verify it by running the following command:

```bash
psql --version
```

- **Create a new PostgreSQL database**:

  ```bash
  psql -U postgres
  CREATE DATABASE task_management;
  ```

### 2. **Prisma Setup**

Prisma is used to manage the database schema. Follow these steps to set up Prisma with your PostgreSQL database:

1. **Configure the `.env` File**:

   Rename the `.env.example` file to `.env` and configure the database connection string:

   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/task_management?schema=public"
   JWT_SECRET="your_jwt_secret_here"
   ```

   Replace `username`, `password`, and `task_management` with your PostgreSQL credentials.

2. **Run Prisma Migrations**:

   Run the following commands to generate the Prisma Client and create the database tables:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

   This will create the necessary tables in your PostgreSQL database.

---

## Environment Variables

Make sure to configure the following environment variables in the `.env` file:

```env
# Database URL for PostgreSQL
DATABASE_URL="postgresql://user:password@localhost:5432/yourdatabase?schema=public"

# JWT Secret for authentication
JWT_SECRET="your_jwt_secret_here"

# Server Port (Optional, default is 3000)
PORT=3000
```

- `DATABASE_URL`: PostgreSQL database connection URL.
- `JWT_SECRET`: A secret key used to sign and verify JWT tokens.
- `PORT`: Port for the application to run on (default is 3000).

---

## Running the Application

1. **Run the Server**:

   To start the server in development mode, use the following command:

   ```bash
   npm run dev
   ```

   OR if using `yarn`:

   ```bash
   yarn dev
   ```

   The server will be available at `http://localhost:3000`.

2. **Building for Production**:

   To build the application for production:

   ```bash
   npm run build
   npm start
   ```

   OR with `yarn`:

   ```bash
   yarn build
   yarn start
   ```

---

## Testing the APIs

You can use tools like **Postman** or **Insomnia** to test the APIs. Below are the example endpoints:

### 1. **Sign Up** (POST `/auth/signup`)

- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "password": "password123"
  }
  ```

### 2. **Login** (POST `/auth/login`)

- **Request Body**:

  ```json
  {
    "email": "test@example.com",
    "password": "password123"
  }
  ```

- **Response**:
  The response will include a **JWT token** that will be used for authenticated requests.

### 3. **Create Task** (POST `/tasks/create`)

- **Authorization**: Bearer `<JWT_TOKEN>`

- **Request Body**:
  ```json
  {
    "title": "New Task",
    "description": "This is a task description",
    "dueDate": "2025-12-31T12:00:00Z"
  }
  ```

### 4. **Get All Tasks** (GET `/tasks`)

- **Authorization**: Bearer `<JWT_TOKEN>`

### 5. **Get My Tasks** (GET `/tasks/my-tasks`)

- **Authorization**: Bearer `<JWT_TOKEN>`

### 6. **Get Shared Tasks** (GET `/tasks/shared-tasks`)

- **Authorization**: Bearer `<JWT_TOKEN>`

---

## Additional Scripts

- **Build the Application**:

  To build the application for production, run:

  ```bash
  npm run build
  ```

  OR if using `yarn`:

  ```bash
  yarn build
  ```

- **Lint the Code**:

  To lint your code using ESLint:

  ```bash
  npm run lint
  ```

  OR with `yarn`:

  ```bash
  yarn lint
  ```

---

## Conclusion

This **Task Management App** includes APIs for user authentication, task creation, and sharing tasks between users. The backend is built using **Node.js**, **PostgreSQL**, and **TypeScript**, while Prisma is used for managing the database schema.

Follow the steps above to set up the application and run it in your local development environment. Let me know if you have any questions!
