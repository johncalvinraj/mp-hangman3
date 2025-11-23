# Multi Player Hangman

A multiplayer hangman game built with Angular and Node.js/Express.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (comes with Node.js)

## Setup

### 1. Install Client Dependencies

From the project root directory, install the Angular client dependencies:

```bash
npm install
```

### 2. Install Server Dependencies

Navigate to the server directory and install the server dependencies:

```bash
cd server
npm install
cd ..
```

## Running the Application

### Development Mode

#### Option 1: Run Client and Server Separately

1. **Start the Angular development server** (from project root):
   ```bash
   npm start
   ```
   The client will be available at `http://localhost:4200` (default Angular dev server port).

2. **Start the Express server** (in a separate terminal, from project root):
   ```bash
   cd server
   node server.js
   ```
   The server will be available at `http://localhost:3000`.

#### Option 2: Run Production Build with Server

1. **Build the Angular application** (from project root):
   ```bash
   npm run build
   ```

2. **Start the Express server** (from project root):
   ```bash
   cd server
   node server.js
   ```
   The application will be available at `http://localhost:3000`.

## Project Structure

- `src/` - Angular client application source code
- `server/` - Node.js/Express server
- `dist/` - Built Angular application (generated after `npm run build`)

## Available Scripts

### Client (from project root)

- `npm start` - Start Angular development server
- `npm run build` - Build the Angular application for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run tests

### Server (from server directory)

- `node server.js` - Start the Express server
