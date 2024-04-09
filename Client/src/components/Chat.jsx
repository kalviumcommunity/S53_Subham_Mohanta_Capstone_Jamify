import React, { useRef, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, getFirestore, serverTimestamp, addDoc, orderBy, query } from 'firebase/firestore';
import {useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkPIsyYfUe_CwAIKsR6A1dLeH_14L_YiE",
    authDomain: "jamify-rooms.firebaseapp.com",
    projectId: "jamify-rooms",
    storageBucket: "jamify-rooms.appspot.com",
    messagingSenderId: "1040121547409",
    appId: "1:1040121547409:web:bbdb99b9f943ca856ccd30",
    measurementId: "G-1WBF799KGD"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);

function Chat() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1><svg width="52" height="52" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="71" height="71" rx="22.5" fill="#191919" stroke="#474747"/>
<rect x="17" y="11" width="39" height="46" fill="url(#paint0_linear_256_1371)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.8455 10.0296H16.3104C15.1524 10.0296 15.3613 10.3894 14.5425 11.2082C13.7236 12.027 13.3639 11.818 13.3639 12.976L13.3639 55.9932C13.3639 52.558 12.5451 57.5315 13.3639 58.3503C14.1827 59.1692 13.9738 58.9396 15.1318 58.9396H54.5216C55.6796 58.9396 55.5623 58.5799 56.3811 57.761C57.1999 56.9422 56.9704 55.9727 56.9704 54.8147V12.976C56.9704 11.818 56.6106 11.4377 55.7918 10.6189C54.973 9.80008 54.0035 10.0296 52.8455 10.0296ZM47.8879 40.4537C47.0802 42.1216 46.2594 42.2089 46.6174 40.4537C47.5387 35.9172 46.9143 26.1718 40.0506 25.0889V45.8285C40.0506 50.0768 38.0945 53.775 32.8944 55.4473C27.847 57.0584 22.2015 55.3774 20.8785 51.7535C19.5555 48.1295 22.5246 43.7196 27.5064 41.9033C30.2877 40.8903 33.51 40.6283 35.6844 41.4623V11.9903H40.0506C40.0506 22.2727 57.7993 20.0198 47.8879 40.4537Z" fill="#191919"/>
<defs>
<linearGradient id="paint0_linear_256_1371" x1="24.481" y1="53.2311" x2="52.5225" y2="28.0576" gradientUnits="userSpaceOnUse">
<stop stop-color="#DB4523"/>
<stop offset="1" stop-color="#FFB6A4"/>
</linearGradient>
</defs>
</svg></h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </>
  );
}

function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>
      Sign Out
    </button>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef,orderBy('createdAt'));

  const [messages] = useCollectionData(q, { idField: 'id' });
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef,{
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="say something nice"
        />
        <button type="submit" disabled={!formValue}>
          ️
        </button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>
  );
}

export default Chat;
