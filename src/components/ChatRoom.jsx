import { useRef, useState } from "react";
// Firebase Hooks:
import { useCollectionData } from "react-firebase-hooks/firestore";
// Components:
import ChatMessage from "./ChatMessage";

export default function ChatRoom({ firebase, firestore, auth }) {
  const [formValue, setFormValue] = useState("");
  const scrollBottem = useRef();

  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const handelFormChange = (event) => {
    setFormValue(event.target.value);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");

    scrollBottem.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages?.map((msg) => (
          <ChatMessage key={msg.id} message={msg} auth={auth} />
        ))}
        <div ref={scrollBottem} />
      </main>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={formValue}
          onChange={handelFormChange}
          placeholder="say something nice"
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
