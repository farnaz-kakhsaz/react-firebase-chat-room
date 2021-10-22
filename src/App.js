import { firebase, auth, firestore } from "./firebase/firebase";
// Firebase Hooks:
import { useAuthState } from "react-firebase-hooks/auth";
// Components:
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import ChatRoom from "./components/ChatRoom";
// CSS:
import "./App.css";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut auth={auth} />
      </header>
      <section>
        {user ? (
          <ChatRoom firebase={firebase} firestore={firestore} auth={auth} />
        ) : (
          <SignIn firebase={firebase} auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
