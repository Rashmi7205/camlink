
# CamLink

## Overview

This project is a Zoom-like video conferencing application built using modern web technologies. It supports real-time video and audio communication, screen sharing, and chat functionality. The application aims to provide a seamless user experience for online meetings and collaboration.

## Live Demo

Check out the live demo of the application: [CamLink](https://meetings-azure.vercel.app/)

## Features

- **Real-Time Video and Audio Communication:** Facilitates seamless video and audio interactions using [stream](https://getstream.io/).
- **Screen Sharing:** Allows participants to share their screens during meetings.
- **User Authentication:** Secure login and registration system using JWT by [Clerk](https://clerk.com/) .
- **Meeting Management:** Create, join, and manage meetings with ease.
- **Responsive UI:** Optimized for various devices and screen sizes.
- **End-to-End Encryption:** Ensures secure communication between participants.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Real-Time Communication:** WebRTC, Socket.io
- **Database:** MongoDB
- **Deployment:** Vercel
- **Authentication:** JWT (JSON Web Tokens)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v14.x or later)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Rashmi7205/zoom-clone.git
    cd camlink
    ```

2. **Install dependencies for both frontend and backend:**
    ```bash
    # In the root directory
    npm install

    # Navigate to the client directory
    cd client
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```env.sample
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=#######
CLERK_SECRET_KEY=######
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=######
STREAM_SECRET_KEY=#######
NEXT_PUBLIC_BASE_URL=localhost:3000
    ```

4. **Run the application:**

    In the root directory, run the following command to start both the backend and frontend servers:

    ```bash
    npm run dev
    ```

    The application will be accessible at `http://localhost:3000`.

## Usage

- **Sign Up / Sign In:** Create a new account or sign in with existing credentials.
- **Create a Meeting:** Start a new meeting by clicking on the "Start Meeting" button.
- **Join a Meeting:** Join an existing meeting by entering the meeting ID.
- **In-Meeting Features:** Use video, audio, chat, and screen sharing functionalities during the meeting.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the coding standards and include relevant tests.



## Acknowledgements

- Stream for real-time communication.
- Clerk for Authentication and User Management.
- Vercel for hosting the live demo.

## Contact

If you have any questions or feedback, feel free to reach out:

- [GitHub Issues](https://github.com/Rashmi7205/camlink/issues)
---

This README file provides a comprehensive overview of the project, its features, technologies used, setup instructions, and contribution guidelines.
