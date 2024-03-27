import React from 'react';
import '../App.css';
import Sidebar from './Sidebar';

// Import your images
import Image_1 from "../assets/1.png";
import Image_2 from "../assets/2.png";
import Image_3 from "../assets/3 (2).png";
import Image_4 from "../assets/4.png";
import Image_5 from "../assets/5.png";
import Image_6 from "../assets/6.png";
import Image_7 from "../assets/7.png";
import Image_8 from "../assets/8.png";
import Image_9 from "../assets/9.png";
import Image_10 from "../assets/10.png";
import Image_11 from "../assets/11.png";
import Image_12 from "../assets/12.png";

// Array to hold data for each object
const objectsData = [
    { name: 'Hiphop', image: Image_1 },
    { name: 'Pop', image: Image_2 },
    { name: 'Classical', image: Image_3 },
    { name: 'Rock', image: Image_4 },
    { name: 'EDM', image: Image_5 },
    { name: 'R&B', image: Image_6 },
    { name: 'Country', image: Image_7 },
    { name: 'Jazz', image: Image_8 },
    { name: 'Classic', image: Image_9 },
    { name: 'Metal', image: Image_10 },
    { name: 'R&B', image: Image_11 },
    { name: 'Lo-Fi', image: Image_12 }
];

const Browse = () => {
    return (
        <>
            <Sidebar />
            <div className="grid-container-browse">
                {objectsData.map((object, index) => (
                    <div key={`object${index + 1}`} className={`object${index + 1}`}>
                        <div className='layer-1'>
                            <img src={object.image} alt={`Object ${index + 1}`} width="200px"/>
                        </div>
                        <div className='text'>
                            <p className='name'>{object.name}</p>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.93934 17.2028C0.353553 17.7886 0.353553 18.7383 0.93934 19.3241C1.52513 19.9099 2.47487 19.9099 3.06066 19.3241L0.93934 17.2028ZM19.7635 1.99997C19.7635 1.17155 19.0919 0.499972 18.2635 0.499973L4.76346 0.499972C3.93503 0.499972 3.26346 1.17154 3.26346 1.99997C3.26346 2.8284 3.93503 3.49997 4.76346 3.49997H16.7635V15.5C16.7635 16.3284 17.435 17 18.2635 17C19.0919 17 19.7635 16.3284 19.7635 15.5L19.7635 1.99997ZM3.06066 19.3241L19.3241 3.06063L17.2028 0.939312L0.93934 17.2028L3.06066 19.3241Z" fill="white"/>
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Browse;
