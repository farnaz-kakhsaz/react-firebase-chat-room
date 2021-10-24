# React Firebase Chat Room

![3d-sphere](https://user-images.githubusercontent.com/37678729/138594759-ff3b2c9e-35de-41ce-94c6-81c56d23a753.gif)

A simple full-stack chat with React and Firebase (Cloud Firestore).

## Installation

- Clone the project: `git clone https://github.com/farnaz-kakhsaz/react-firebase-chat-room.git`
- `cd react-firebase-chat-room`
- `npm install`
- `npm start`
- Visit [http://localhost:3000](http://localhost:3000)

### Firebase Configuration

- copy/paste your configuration from your Firebase project's dashboard into one of these files
  - _src/components/Firebase/firebase.js_ file
  - .env file
  - _.env.development_ and _.env.production files_

The _.env_ or _.env.development_ and _.env.production_ files could look like the following then:

```
REACT_APP_API_KEY=AIzaSyBtxZ3phPeXcsZsRTySIXa7n33NtQ
REACT_APP_AUTH_DOMAIN=react-firebase-s2233d64f8.firebaseapp.com
REACT_APP_PROJECT_ID=react-firebase-s2233d64f8
REACT_APP_STORAGE_BUCKET=react-firebase-s2233d64f8.appspot.com
REACT_APP_MESSAGING_SENDER_ID=701928454501
REACT_APP_APP_ID = "1:79584902500:web:944b7efb6c4d689c22a0b5"
REACT_APP_MEASUREMENT_ID = "G-7FXMENT9KS"
```
