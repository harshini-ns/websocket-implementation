# Real-time WebSocket Direct Chat Application

This is a simple, real-time direct chat application built using Node.js with WebSockets on the backend and plain HTML/JavaScript on the frontend. It allows users to connect, specify a recipient, and send direct messages in real-time.

## Features

* **Real-time Messaging:** Instant message delivery between connected users.
* **Direct Messaging:** Send private messages to specific users.
* **User Identification:** Users are identified by a unique `userId` when connecting.
* **Simple Frontend:** Minimalist HTML/JavaScript interface for easy interaction.

## Technologies Used

* **Backend:**
    * [Node.js](https://nodejs.org/): JavaScript runtime environment.
    * [ws](https://github.com/websockets/ws): A fast and thoroughly tested WebSocket client and server for Node.js.
* **Frontend:**
    * HTML5
    * CSS3 (basic, can be expanded)
    * JavaScript (Vanilla JS)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js installed on your machine.

* **Node.js**: Download and install from [nodejs.org](https://nodejs.org/).

### Installation

1.  **Clone the repository (or create the files manually):**

    If you have a Git repository, clone it:
    ```bash
    git clone <your-repository-url>
    cd <your-repository-name>
    ```
    If you're creating the files manually, ensure `server.js` and `index.html` are in the same root directory.

2.  **Install backend dependencies:**
    Navigate to the project's root directory in your terminal and install the `ws` package:
    ```bash
    npm install ws
    ```

### Running the Application

1.  **Start the WebSocket Server:**
    In your terminal, from the project's root directory, run the server:
    ```bash
    node server.js
    ```
    You should see the message: `🚀 WebSocket server running on ws://localhost:8080`

2.  **Open the Frontend:**
    Open the `index.html` file in your web browser (you can simply double-click it, or drag and drop it into your browser).

3.  **Enter Your User ID:**
    When prompted, enter a unique name for your user ID (e.g., `Alice`).

4.  **Open Another Client (Optional):**
    To test direct messaging, open `index.html` in another browser tab or window (or even another browser) and enter a different user ID (e.g., `Bob`).

### Usage

* **Connect:** When you open `index.html`, you'll be prompted for a user ID and automatically connect to the WebSocket server.
* **Send Messages:**
    * In the "To (userId)" field, enter the user ID of the person you want to message (e.g., `Alice` or `Bob`).
    * Type your message in the "Type message..." field.
    * Click the "Send" button.
* **Receive Messages:** Messages sent to you will appear in the output area.

## Project Structure