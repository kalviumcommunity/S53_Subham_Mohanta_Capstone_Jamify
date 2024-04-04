import React, { useState } from 'react';
import { useClerk } from "@clerk/clerk-react";
import Sidebar from './Sidebar';

const Settings = () => {
    const { user } = useClerk();
    const [selectedGender, setSelectedGender] = useState('');

    // Function to handle the change in gender selection
    const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
    };

    // State object to hold the state for all input fields
    const [inputFields, setInputFields] = useState({
        gender: { showInput: false, inputText: '', savedText: '' },
        aboutMe: { showInput: false, inputText: '', savedText: '' }
    });

    // Function to toggle visibility of input fields
    const toggleInput = (fieldName) => {
        setInputFields(prevState => ({
            ...prevState,
            [fieldName]: {
                ...prevState[fieldName],
                showInput: !prevState[fieldName].showInput,
                inputText: !prevState[fieldName].showInput && prevState[fieldName].savedText ? prevState[fieldName].savedText : ''
            }
        }));
    };

    // Function to handle changes in input fields
    const handleInputChange = (fieldName, event) => {
        const { value } = event.target;
        setInputFields(prevState => ({
            ...prevState,
            [fieldName]: { ...prevState[fieldName], inputText: value }
        }));
    };

    // Function to save input field text
    const saveText = (fieldName) => {
        setInputFields(prevState => ({
            ...prevState,
            [fieldName]: {
                ...prevState[fieldName],
                savedText: prevState[fieldName].inputText,
                inputText: '',
                showInput: false
            }
        }));
    };

    return (
        <>
            <Sidebar />
            <div className='settings-banner' />
            <div className='settings-container'>
                <div className='Clerk-img'>
                    <img src={user.imageUrl} alt="User Profile" width="130px" />
                </div>
                <div className='settings-box'>
                    <div className='settings-child'>
                        <div>
                            <h1 style={{color:"#FFFAEA"}}>{user.firstName}</h1>
                            <p style={{color: "#595F6B"}}>{user.username}</p>
                        </div>
                        <div className='user-about'>
                            <h1 style={{color:"#FFFAEA"}}>ABOUT ME<svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.154 1.94058C17.2798 2.06685 17.3505 2.23787 17.3505 2.41616C17.3505 2.59445 17.2798 2.76547 17.154 2.89174L15.7488 4.29827L13.0543 1.60376L14.4594 0.197229C14.5858 0.0709434 14.7571 0 14.9357 0C15.1143 0 15.2856 0.0709434 15.412 0.197229L17.154 1.93923V1.94058ZM14.7963 5.24944L12.1017 2.55493L2.92289 11.7351C2.84874 11.8093 2.79292 11.8997 2.75988 11.9992L1.67533 15.2515C1.65567 15.3108 1.65287 15.3743 1.66727 15.4351C1.68166 15.4959 1.71268 15.5515 1.75685 15.5957C1.80103 15.6398 1.85661 15.6709 1.9174 15.6853C1.97818 15.6997 2.04178 15.6969 2.10107 15.6772L5.35334 14.5927C5.45272 14.56 5.54313 14.5046 5.6174 14.431L14.7963 5.24944Z" fill="#FFFAEA"/>
                                <path d="M1 19.6157H18" stroke="#FFFAEA" stroke-width="2" stroke-linecap="round"/>
                            </svg></h1>
                            <p style={{color: "#595F6B"}}>{inputFields.aboutMe.savedText}</p>
                            <button onClick={() => toggleInput('aboutMe')}>
                                {inputFields.aboutMe.showInput ? '' : 'Show Input Field'}
                            </button>
                            {inputFields.aboutMe.showInput && (
                                <div>
                                    <input
                                        type="text"
                                        value={inputFields.aboutMe.inputText}
                                        onChange={(event) => handleInputChange('aboutMe', event)}
                                    />
                                    <button onClick={() => saveText('aboutMe')}>Save</button>
                                </div>
                            )}
                        </div>
                        <div className='user-gender'>
                            <h1 style={{color:"#FFFAEA"}}>GENDER</h1>
                            <div className="dropdown-container">
                                <select value={selectedGender} onChange={handleGenderChange}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className='rooms'>
                        <h1 style={{color:"#FFFAEA"}}>ROOMS</h1>
                        <div>
                            <div style={{backgroundColor:"#FE2929", borderRadius:"50px"}}>HipHop</div>
                            <div style={{backgroundColor:"#FE8229", borderRadius:"50px"}}>Pop</div>
                            <div style={{backgroundColor:"#29A5FE", borderRadius:"50px"}}>Classical</div>
                            <div style={{backgroundColor:"#AD29FE", borderRadius:"50px"}}>Rock</div>
                            <div style={{backgroundColor:"#FEF629", borderRadius:"50px"}}>LoFi</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
