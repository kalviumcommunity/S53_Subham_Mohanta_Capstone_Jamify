import React, { useState } from 'react';
import Sidebar from './Sidebar';
import '../App.css';
import Image_1 from "../assets/13.png";
import Image_2 from "../assets/14.png";
import Image_3 from "../assets/15.png";
import Image_4 from "../assets/16.png";
import Image_5 from "../assets/17.png";
import Image_6 from "../assets/18.png";
import Image_7 from "../assets/19.png";

const Chats = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);

    const data = [
        { id: 1, name: 'Manpreet', image: Image_1 },
        { id: 2, name: 'Rajab', image: Image_2 },
        { id: 3, name: 'Jason', image: Image_3 },
        { id: 4, name: 'Soumya', image: Image_4 },
        { id: 5, name: 'Khyati', image: Image_5 },
        { id: 6, name: 'Shubham', image: Image_6 },
        { id: 7, name: 'Arun', image: Image_7 },
    ];

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Sidebar />
            <div className='chat-container'>
                <div className='sidebar-alt'>
                    <div className='search'>
                        <input
                            className='search-inside'
                            type="text"
                            placeholder='Search...'
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                    </div>
                    <div className="users" style={{ marginLeft: "6%", height: "85%" }}>
                        {filteredData.map(item => (
                            <div key={item.id} style={{ display: "flex", alignItems: "center", padding: "5%", cursor: "pointer" }} onClick={() => handleUserClick(item)}>
                                <img src={item.image} alt={item.name} width="48px" />
                                <p>{item.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='chat-box'>
                    {selectedUser && (
                        <div className='profile-img'>
                            <img src={selectedUser.image} width="45px"/>
                            <p>{selectedUser.name}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Chats;
