import React, { useRef, useState } from 'react';
import Sidebar from "./Sidebar"
import { Link } from "react-router-dom"
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, getFirestore, serverTimestamp, addDoc, orderBy, query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth'
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

const GenreRoom = ({ name }) => {
    const [user] = useAuthState(auth);
    return (
        <>
            <Sidebar />
            <div className='genre-room-container'>
                <div className='genre-room-header'>
                    <div className='header-left'>
                        <div>
                            <Link to="/Browse" style={{ textDecoration: "None" }}><button className='back'>
                                <svg width="24" height="24" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M29 12.6884C29 13.169 28.8091 13.63 28.4692 13.9699C28.1293 14.3097 27.6684 14.5007 27.1877 14.5007H6.19042L13.9724 22.279C14.1409 22.4475 14.2746 22.6476 14.3658 22.8677C14.457 23.0879 14.5039 23.3239 14.5039 23.5622C14.5039 23.8004 14.457 24.0364 14.3658 24.2566C14.2746 24.4767 14.1409 24.6768 13.9724 24.8453C13.8039 25.0138 13.6039 25.1474 13.3837 25.2386C13.1636 25.3298 12.9276 25.3767 12.6893 25.3767C12.451 25.3767 12.2151 25.3298 11.9949 25.2386C11.7748 25.1474 11.5747 25.0138 11.4062 24.8453L0.53243 13.9715C0.363657 13.8031 0.229754 13.6031 0.138391 13.383C0.0470277 13.1628 0 12.9267 0 12.6884C0 12.45 0.0470277 12.214 0.138391 11.9938C0.229754 11.7736 0.363657 11.5736 0.53243 11.4053L11.4062 0.53148C11.7465 0.19118 12.2081 0 12.6893 0C13.1706 0 13.6321 0.19118 13.9724 0.53148C14.3127 0.871781 14.5039 1.33333 14.5039 1.81459C14.5039 2.29585 14.3127 2.75739 13.9724 3.09769L6.19042 10.8761H27.1877C27.6684 10.8761 28.1293 11.067 28.4692 11.4069C28.8091 11.7468 29 12.2077 29 12.6884Z" fill="#FFFAEA" />
                                </svg>
                            </button></Link>
                        </div>
                        <div className='room-name'>
                            <h1>{name}</h1>
                        </div>
                        <div className="custom-hr-room" />
                        <div className='Live-count'>
                            <p>23 Online now</p>
                        </div>
                    </div>
                    <div className='header-right'>
                        <div className=''>
                            <input
                                className='search-inside'
                                type="text"
                                placeholder='Search...'
                            />
                        </div>
                        <button className='notifications'>
                            <svg width="24" height="24" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.33094 24.0447H8.04728C8.1444 26.6809 10.3088 29.1228 13.5 29.1228C16.6773 29.1228 18.8556 26.7086 18.9666 24.0447H24.6691C26.112 24.0447 27 23.2539 27 22.0606C27 20.5761 25.6542 19.3135 24.3916 18.1064C23.4065 17.149 23.1706 15.2343 22.9902 13.278C22.796 8.04728 21.2559 4.55087 17.6485 3.24666C17.1074 1.40134 15.5673 0 13.5 0C11.4327 0 9.8926 1.40134 9.36537 3.24666C5.74409 4.55087 4.21788 8.04728 4.00976 13.278C3.82939 15.2343 3.59353 17.149 2.60843 18.1064C1.34584 19.3135 0 20.5761 0 22.0606C0 23.2539 0.887975 24.0447 2.33094 24.0447ZM3.38541 21.464V21.2975C3.74615 20.8952 4.55087 20.1598 5.23073 19.3828C6.18808 18.2867 6.63207 16.261 6.77081 13.6249C6.93731 8.06115 8.65776 6.18808 10.8777 5.59147C11.2246 5.49435 11.4049 5.32785 11.4327 4.95324C11.5021 3.5519 12.2929 2.60843 13.5 2.60843C14.721 2.60843 15.4979 3.5519 15.5673 4.95324C15.5951 5.32785 15.7893 5.49435 16.1223 5.59147C18.3561 6.18808 20.0627 8.06115 20.2292 13.6249C20.3818 16.261 20.8258 18.2867 21.7693 19.3828C22.4491 20.1598 23.2261 20.8952 23.5868 21.2975V21.464H3.38541ZM13.5 26.889C11.9322 26.889 10.8083 25.7652 10.7112 24.0447H16.3027C16.2194 25.7513 15.0817 26.889 13.5 26.889Z" fill="#FFFAEA" />
                            </svg>
                        </button>
                    </div>
                    
                </div>
                <div className='Alert'>
                    <p>150+ new messages since 6:17 PM on March 27, 2024</p>
                </div>
                <div className='App'>
                    {user ? <ChatRoom name={name} /> : <SignIn />}
                </div>
            </div>
        </>
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

const ChatRoom = ({name})=>{
    const dummy = useRef();
    const messagesRef = collection(firestore, 'messages');
    const q = query(messagesRef, orderBy('createdAt'));

    const [messages] = useCollectionData(q, { idField: 'id' });
    const [formValue, setFormValue] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();

        const { uid, photoURL } = auth.currentUser;

        await addDoc(messagesRef, {
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
            <div className='Welcome-msg'>
                <h1>Welcome to<br />{name}</h1>
                <p>Started from the bottom, now we're here.</p>
            </div>
            <div className='custom-hr-room-2' />
            <main>
                {messages && messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}
                <span ref={dummy}></span>
            </main>

            <form onSubmit={sendMessage}>
                <input
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                    placeholder="Say something nice"
                />
                <button type="submit" disabled={!formValue}/>
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
                <img className="img" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
                <p style={{fontFamily:"medium", borderRadius:"50px", padding:"8px"}}>{text}</p>
            </div>
        </>
    );
}

export default GenreRoom;