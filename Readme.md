
# Real-time Notification Demo

A simple real-time notification system using **Socket.IO** and **Express**. This demo demonstrates how to send real-time notifications between the server and connected clients, utilizing native browser notifications.

## Project Structure

- `public/index.html`: Frontend file where users can interact with the application. It contains the button to trigger notifications and JavaScript code to handle Socket.IO communication.
- `app.js`: Express-based server that uses Socket.IO to handle real-time communication. It listens for notification events and broadcasts them to other connected clients.
- `node_modules/`: Contains the project dependencies (after running `npm install`).

## Features

- Real-time notifications using Socket.IO.
- Button to trigger notifications to other users connected to the server.
- Native browser notification support.

## Installation & Setup

Follow these steps to get your local development environment set up:

### 1. Clone this repository

```bash
git clone https://github.com/<your-username>/Realtime-Notification-Alert.git
cd Realtime-Notification-Alert
```

### 2. Install Dependencies

Make sure you have `Node.js` installed. Run the following to install dependencies:

```bash
npm install
```

### 3. Run the Application

Start the server by running:

```bash
node app.js
```

Your application will be available at [http://localhost:3000](http://localhost:3000).

### 4. Testing

1. Open the website in multiple tabs or browsers.
2. Click the **"Send Notification"** button on one tab to trigger a notification to all connected clients.
3. Other clients will receive a notification if the browser's notification permission is granted.

### Technologies Used

- **Node.js** - JavaScript runtime used for building the server.
- **Express** - Web framework for Node.js.
- **Socket.IO** - Real-time bi-directional event-based communication for web apps.
- **Native Browser Notifications** - Display notifications to the user in their browser.

## License

This project is licensed under the MIT License.


This `README.md` file contains basic information about your project, including setup instructions, features, and how to test it. Feel free to update or modify it to suit any future changes or expansions!