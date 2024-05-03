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
import { useClerk } from '@clerk/clerk-react';
import { SignInButton } from '@clerk/clerk-react';

const Chats = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedUser, setSelectedUser] = useState(null);
    const {user} = useClerk();

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
            {user ? (<div className='chat-container'>
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
            </div>) : (
                <div className='sign-in-container'>
                    <svg width="500" height="400" viewBox="0 0 518 485" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M393.784 150.063C394.697 150.883 395.857 151.375 397.081 151.461C397.649 151.645 398.25 151.703 398.842 151.631C399.434 151.558 400.003 151.357 400.509 151.041C400.673 150.943 400.792 150.785 400.84 150.6C400.888 150.416 400.861 150.22 400.766 150.054C400.406 149.571 399.941 149.175 399.407 148.897C398.873 148.618 398.283 148.463 397.681 148.444C396.449 148.093 395.133 148.177 393.956 148.684C393.843 148.754 393.747 148.849 393.675 148.961C393.603 149.073 393.557 149.2 393.541 149.332C393.525 149.464 393.538 149.599 393.58 149.725C393.622 149.851 393.692 149.967 393.784 150.063Z" fill="#E3E3E3" />
                        <path d="M396.242 158.295C395.517 158.093 395.367 158.022 396.035 158.295C395.217 157.859 396.359 158.78 397.58 158.39C398.003 158.27 398.374 158.015 398.639 157.664C398.904 157.313 399.047 156.885 399.047 156.446C399.047 156.006 398.904 155.579 398.639 155.228C398.374 154.877 398.003 154.622 397.58 154.502C397.02 154.344 396.422 154.41 395.909 154.684C395.397 154.958 395.01 155.42 394.831 155.973C395.027 155.537 395.01 155.581 394.787 156.104C394.735 156.323 394.712 156.547 394.719 156.772C394.722 157.175 394.883 157.56 395.168 157.845C395.453 158.131 395.839 158.292 396.242 158.295Z" fill="#E3E3E3" />
                        <path d="M381.644 159.914C382.211 159.914 382.754 159.688 383.155 159.288C383.556 158.887 383.781 158.344 383.781 157.777C383.781 157.211 383.556 156.667 383.155 156.266C382.754 155.866 382.211 155.641 381.644 155.641C381.078 155.641 380.534 155.866 380.134 156.266C379.733 156.667 379.508 157.211 379.508 157.777C379.508 158.344 379.733 158.887 380.134 159.288C380.534 159.688 381.078 159.914 381.644 159.914Z" fill="#E3E3E3" />
                        <path d="M388.25 160.788C387.277 162.139 386.718 163.742 386.639 165.404C386.223 167.383 386.047 169.406 386.116 171.427C386.299 173.457 388.37 176.122 390.4 174.168C390.507 174.059 390.587 173.927 390.636 173.782C390.684 173.637 390.699 173.483 390.68 173.331C390.66 173.179 390.606 173.034 390.522 172.906C390.439 172.778 390.327 172.671 390.195 172.593C387.143 170.857 390.539 164.658 389.517 161.113C389.478 160.987 389.408 160.874 389.312 160.784C389.217 160.694 389.101 160.629 388.974 160.597C388.847 160.564 388.714 160.565 388.587 160.598C388.46 160.632 388.344 160.697 388.25 160.788Z" fill="#E3E3E3" />
                        <path d="M388.517 182.52C390.513 183.43 392.724 183.761 394.899 183.475C397.073 183.189 399.123 182.297 400.815 180.901C404.028 178.416 406.917 173.457 405.415 169.337C405.359 169.154 405.246 168.995 405.093 168.882C404.94 168.769 404.754 168.708 404.564 168.708C404.373 168.708 404.188 168.769 404.034 168.882C403.881 168.995 403.768 169.154 403.712 169.337C402.581 172.879 402.265 176.174 399.096 178.675C396.121 180.697 392.49 181.517 388.934 180.97C388.755 180.976 388.582 181.039 388.441 181.151C388.3 181.263 388.199 181.417 388.152 181.59C388.105 181.764 388.115 181.948 388.181 182.116C388.247 182.283 388.365 182.425 388.517 182.52Z" fill="#E3E3E3" />
                        <path d="M427.089 207.508C426.902 207.51 426.722 207.579 426.581 207.703C426.441 207.826 426.349 207.996 426.323 208.182C426.297 208.367 426.338 208.555 426.439 208.713C426.54 208.87 426.695 208.986 426.874 209.04C450.974 214.204 465.384 238.018 457.394 256.684C456.119 252.452 451.32 249.762 447.426 248.359C441.629 246.298 435.323 246.159 429.441 247.961C433.779 239.969 432.645 229.292 423.413 224.76C422.596 224.357 421.625 225.409 422.378 226.123C426.618 230.14 430.008 235.298 428.645 241.44C427.913 244.013 426.669 246.412 424.988 248.493C423.307 250.575 421.224 252.295 418.862 253.553C411.325 257.973 402.485 259.18 394.321 261.886C393.994 261.989 393.715 262.204 393.531 262.493C393.348 262.782 393.272 263.127 393.318 263.466C393.364 263.805 393.529 264.117 393.782 264.347C394.036 264.577 394.363 264.71 394.705 264.722C400.441 264.26 406.073 262.929 411.409 260.774C417.662 259.036 423.288 255.551 427.629 250.727C441.526 248.648 447.085 248.942 456.168 259.142C452.667 265.073 447.176 269.57 440.67 271.832C429.438 275.979 418.699 273.437 407.404 271.581C407.537 271.074 406.534 270.949 406.284 271.254C404.586 273.32 404.303 277.743 397.37 285.231C392.659 290.127 386.501 293.381 379.802 294.515C379.613 294.574 379.451 294.697 379.345 294.864C379.239 295.031 379.195 295.23 379.221 295.426C379.248 295.622 379.343 295.802 379.49 295.935C379.636 296.067 379.825 296.143 380.023 296.15C386.987 295.826 393.553 292.806 398.329 287.727C402.067 283.795 405.09 279.242 407.262 274.271C427.525 283.74 458.972 276.89 462.986 251.926C466.501 230.08 448.641 209.271 427.089 207.508Z" fill="#E3E3E3" />
                        <path d="M367.905 286.116C374.818 287.04 383.274 284.678 387.487 278.759C388.032 277.98 386.942 276.873 386.151 277.424C380.301 281.511 375.298 284.533 367.894 284.781C367.735 284.807 367.591 284.89 367.487 285.013C367.383 285.136 367.327 285.292 367.328 285.454C367.329 285.615 367.388 285.77 367.494 285.891C367.6 286.013 367.745 286.093 367.905 286.116Z" fill="#E3E3E3" />
                        <path d="M370.654 292.199C377.567 293.125 386.023 290.76 390.236 284.841C390.795 284.062 389.691 282.956 388.901 283.503C383.05 287.607 378.047 290.613 370.643 290.861C370.482 290.885 370.336 290.967 370.23 291.09C370.124 291.214 370.067 291.372 370.068 291.534C370.07 291.697 370.13 291.854 370.237 291.976C370.345 292.098 370.493 292.177 370.654 292.199Z" fill="#E3E3E3" />
                        <path d="M364.605 278.508C373.219 280.189 383.868 277.094 387.86 268.649C387.932 268.519 387.955 268.367 387.925 268.221C387.895 268.075 387.814 267.945 387.696 267.853C387.578 267.762 387.432 267.716 387.283 267.724C387.134 267.731 386.993 267.792 386.885 267.894C380.511 273.797 373.805 278.01 364.76 277.402C364.627 277.406 364.499 277.457 364.399 277.546C364.3 277.636 364.235 277.757 364.216 277.89C364.198 278.022 364.227 278.157 364.298 278.27C364.369 278.383 364.478 278.467 364.605 278.508Z" fill="#E3E3E3" />
                        <path d="M381.045 255.144C389.073 259.564 388.563 262.627 391.051 266.295C391.163 266.474 391.329 266.612 391.525 266.689C391.721 266.766 391.937 266.778 392.141 266.724C392.344 266.669 392.525 266.551 392.656 266.385C392.787 266.22 392.862 266.018 392.869 265.807C392.746 259.872 386.443 256.092 381.792 253.882C380.955 253.482 380.206 254.681 381.045 255.144Z" fill="#E3E3E3" />
                        <path d="M280.446 248.675C278.593 239.138 279.579 237.404 284.062 229.412C284.169 229.218 284.21 228.995 284.18 228.775C284.149 228.556 284.047 228.352 283.891 228.196C283.734 228.039 283.531 227.937 283.312 227.906C283.093 227.875 282.869 227.915 282.675 228.022C275.454 231.578 273.208 243.372 277.868 249.754C278.045 250.041 278.318 250.256 278.639 250.359C278.96 250.463 279.308 250.448 279.619 250.318C279.93 250.187 280.184 249.95 280.336 249.649C280.487 249.348 280.526 249.003 280.446 248.675Z" fill="#E3E3E3" />
                        <path d="M274.176 246.457C271.83 239.069 274.683 232.519 278.368 226.251C278.475 226.055 278.517 225.828 278.485 225.606C278.453 225.385 278.351 225.179 278.192 225.02C278.034 224.862 277.828 224.759 277.606 224.727C277.384 224.696 277.158 224.737 276.961 224.845C269.457 229.676 269.037 239.832 272.386 247.19C272.858 248.215 274.509 247.503 274.176 246.457Z" fill="#E3E3E3" />
                        <path d="M267.29 242.489C267.71 239.459 266.59 236.47 267.075 233.35C267.876 230.034 269.208 226.869 271.018 223.978C271.131 223.769 271.173 223.528 271.139 223.293C271.104 223.058 270.995 222.84 270.826 222.671C270.658 222.503 270.44 222.393 270.205 222.359C269.969 222.324 269.729 222.367 269.519 222.48C263.993 225.829 260.377 238.388 266.399 242.852C266.48 242.898 266.569 242.926 266.662 242.933C266.755 242.939 266.848 242.924 266.934 242.889C267.02 242.854 267.097 242.8 267.159 242.731C267.22 242.661 267.265 242.579 267.29 242.489Z" fill="#E3E3E3" />
                        <path d="M379.778 229.025C376.851 235.554 376.192 242.875 377.903 249.822C378.151 250.653 379.598 250.809 379.745 249.822C380.217 246.62 380.198 243.391 380.361 240.162C380.541 236.571 381.141 233.025 381.337 229.445C381.372 228.641 380.119 228.262 379.778 229.025Z" fill="#E3E3E3" />
                        <path d="M480.533 448.091C484.17 450.99 486.65 454.023 483.631 456.465C481.075 458.533 473.706 451.56 469.524 447.2C447.135 446.51 415.149 445.644 388.834 446.2C389.962 450.854 391.155 458.705 387.092 460.825C381.206 463.89 363.551 463.89 360.567 460.007C358.006 456.661 363.208 450.93 370.557 446.911C365.396 447.221 360.733 447.627 356.744 448.148C274.138 458.933 376.705 487.167 433.616 476.921C453.841 473.281 455.852 481.608 472.36 483.682C488.514 485.712 503.455 484.33 512.115 477.932C527.909 466.245 508.311 451.832 480.533 448.091Z" fill="#FFEA7A" />
                        <path d="M53.7072 126.927C55.3585 86.5212 63.1193 40.564 99.0621 16.02C106.883 10.5633 115.753 6.79259 125.109 4.94727C134.465 3.10194 144.103 3.22233 153.41 5.30079C162.717 7.37924 171.49 11.3704 179.172 17.0207C186.854 22.671 193.278 29.857 198.034 38.1224C207.525 54.655 209.825 74.1333 210.079 92.8786C210.079 93.3556 210.268 93.813 210.605 94.1503C210.943 94.4876 211.4 94.6771 211.877 94.6771C212.354 94.6771 212.812 94.4876 213.149 94.1503C213.486 93.813 213.676 93.3556 213.676 92.8786C213.779 74.5802 211.389 55.6415 202.797 39.2451C198.436 30.7749 192.445 23.2491 185.168 17.0993C177.891 10.9495 169.472 6.2967 160.393 3.40781C151.314 0.518926 141.754 -0.549251 132.262 0.264548C122.769 1.07835 113.531 3.75811 105.076 8.15015C87.3219 17.7258 73.0304 32.6447 64.2257 50.7937C55.1405 69.3618 47.4451 103.01 49.1755 126.936C49.1969 127.523 49.4456 128.079 49.869 128.487C50.2924 128.894 50.8576 129.121 51.4453 129.12C52.033 129.119 52.5973 128.89 53.0193 128.481C53.4413 128.072 53.6879 127.515 53.7072 126.927Z" fill="#E3E3E3" />
                        <path d="M82.4285 118.464C85.9928 90.6359 87.3336 58.846 109.848 39.0135C135.272 16.6331 164.129 22.1321 179.575 42.4497C192.2 59.0504 190.728 68.4299 192.271 89.6494C192.363 90.9247 194.565 90.8811 194.769 89.6494C197.263 74.6401 190.873 52.6167 186.564 45.8832C179.599 35.0132 167.917 25.0015 155.341 21.8324C129.571 15.3332 100.893 29.3425 87.5079 64.4568C81.2301 81.7381 78.5295 100.115 79.57 118.472C79.6057 118.827 79.7722 119.156 80.0371 119.394C80.302 119.633 80.6463 119.765 81.003 119.764C81.3597 119.763 81.7032 119.629 81.9667 119.389C82.2303 119.149 82.3949 118.819 82.4285 118.464Z" fill="#E3E3E3" />
                        <path d="M89.966 107.877C98.2909 106.561 120.573 100.312 141.643 95.1975C164.097 89.7475 185.202 85.4502 187.12 84.5074C188.148 84.0032 187.559 82.5726 186.575 82.5045C182.439 82.232 105.954 100.489 89.4292 105.939C89.1723 106.011 88.9542 106.181 88.8228 106.413C88.6915 106.645 88.6577 106.92 88.7289 107.177C88.8001 107.434 88.9704 107.652 89.2024 107.783C89.4344 107.914 89.7091 107.948 89.966 107.877Z" fill="#E3E3E3" />
                        <path d="M192.385 352.083C204.814 350.176 236.645 359.986 232.783 368.812C230.214 374.698 126.634 414.529 108.635 422.282C98.5881 426.607 87.7181 430.078 76.8644 428.749C69.8312 427.893 16.7319 418.786 23.0457 407.455C24.9532 404.019 28.929 402.392 32.6132 401.003C57.07 391.806 65.1987 390.844 89.8926 382.143C111.826 374.398 178.736 354.173 192.385 352.083Z" fill="#FFEA7A" />
                        <path d="M210.482 196.938L201.217 189.597C200.572 188.572 200.219 187.391 200.196 186.18C200.174 184.969 200.483 183.775 201.089 182.727C201.811 181.586 202.925 180.747 204.221 180.369C205.517 179.99 206.907 180.097 208.13 180.67L264.383 219.662C264.479 219.728 264.559 219.816 264.615 219.919C264.67 220.022 264.701 220.137 264.704 220.254C264.706 220.371 264.681 220.488 264.63 220.593C264.579 220.698 264.503 220.79 264.41 220.861C262.806 221.833 261.494 223.222 260.616 224.88C259.738 226.537 259.324 228.402 259.42 230.276C259.412 230.406 259.37 230.532 259.297 230.641C259.224 230.749 259.124 230.837 259.007 230.894C258.89 230.952 258.759 230.977 258.629 230.968C258.499 230.959 258.373 230.916 258.265 230.842L237.261 216.613C237.178 216.558 237.086 216.52 236.988 216.501C236.891 216.482 236.791 216.482 236.694 216.502C236.597 216.522 236.505 216.561 236.423 216.617C236.341 216.673 236.271 216.745 236.217 216.828L228.587 228.777C228.533 228.86 228.464 228.931 228.383 228.987C228.301 229.043 228.21 229.082 228.113 229.102C228.016 229.122 227.917 229.123 227.82 229.104C227.723 229.085 227.631 229.047 227.549 228.992L220.559 224.305C220.396 224.196 220.283 224.026 220.244 223.834C220.206 223.641 220.246 223.441 220.355 223.278L227.353 212.759C227.407 212.677 227.445 212.584 227.464 212.487C227.482 212.39 227.481 212.29 227.46 212.193C227.439 212.096 227.399 212.005 227.342 211.924C227.285 211.843 227.213 211.774 227.129 211.721L218.916 206.609C218.754 206.508 218.56 206.473 218.374 206.511C218.187 206.549 218.022 206.658 217.913 206.813L210.736 217.239C210.628 217.397 210.463 217.506 210.277 217.546C210.09 217.585 209.895 217.552 209.733 217.452L201.577 212.424C201.491 212.371 201.418 212.301 201.36 212.218C201.303 212.136 201.262 212.042 201.242 211.944C201.221 211.845 201.221 211.744 201.24 211.645C201.26 211.546 201.299 211.453 201.356 211.37L210.621 197.949C210.732 197.795 210.78 197.604 210.754 197.416C210.728 197.227 210.631 197.056 210.482 196.938Z" fill="#FFEA7A" />
                        <path d="M337.181 316.348C324.88 311.216 324.21 290.245 331.286 273.293C338.363 256.34 351.795 249.059 362.202 253.087C368.624 255.572 370.407 259.725 372.012 267.306C372.535 269.786 380.522 267.006 380.039 263.281C378.522 251.836 374.118 244.95 364.894 241.11C352.631 235.996 337.78 242.045 327.289 255.008C325.323 252.284 322.372 250.436 319.064 249.855C315.756 249.274 312.352 250.008 309.576 251.899L289.014 238.233C288.58 237.942 288.054 237.822 287.537 237.899C287.021 237.975 286.551 238.24 286.22 238.644C283.938 241.966 283.056 246.054 283.768 250.021C283.81 250.322 283.916 250.611 284.08 250.867C284.245 251.123 284.462 251.34 284.719 251.504L303.982 263.837C304.296 266.991 305.759 269.918 308.093 272.062C310.427 274.206 313.468 275.416 316.637 275.462C310.675 295.736 314.495 319.879 329.074 326.147C346.274 333.556 366.352 323.997 374.268 301.894C375.976 297.134 369.09 292.485 366.97 297.014C360.771 310.137 346.996 320.441 337.181 316.348Z" fill="#FFEA7A" />
                        <path d="M190.813 249.542C181.163 234.617 175.49 217.741 169.607 201.08C173.839 198.027 176.878 193.597 178.202 188.55C179.527 183.502 179.054 178.151 176.866 173.413C174.592 168.44 170.645 164.423 165.712 162.062C160.779 159.702 155.174 159.148 149.875 160.497C130.473 165.402 121.115 196.93 144.995 205.898C139.027 225.54 136.697 246.103 130.481 265.687C130.398 266.005 130.4 266.339 130.486 266.656C130.572 266.973 130.739 267.261 130.971 267.494C131.204 267.726 131.493 267.893 131.81 267.978C132.127 268.064 132.461 268.065 132.778 267.982C151.701 262.714 170.383 256.196 189.665 252.359C189.947 252.279 190.207 252.135 190.426 251.94C190.644 251.744 190.815 251.501 190.925 251.23C191.036 250.958 191.083 250.665 191.064 250.373C191.044 250.08 190.958 249.796 190.813 249.542ZM135.056 263.439C140.61 244.231 143.335 224.297 149.243 205.179C149.37 204.688 149.301 204.167 149.051 203.726C148.802 203.285 148.391 202.957 147.905 202.813C139.272 200.347 133.378 193.227 134.585 183.994C135.273 178.827 137.496 173.986 140.967 170.097C143.539 168.868 156.608 163.361 163.23 174.86C168.135 183.365 161.868 196.36 159.23 198.543C158.617 198.883 158.149 199.436 157.916 200.097C157.682 200.758 157.699 201.482 157.963 202.132L170.62 242.462C170.154 242.552 146.665 248.937 141.755 251.438C141.576 251.55 141.437 251.716 141.36 251.913C141.283 252.109 141.271 252.325 141.326 252.529C141.381 252.732 141.5 252.913 141.665 253.044C141.831 253.175 142.034 253.249 142.245 253.256C147.695 253.147 171.146 245.876 173.261 244.977L186.041 249.198C168.795 252.869 151.965 258.482 135.056 263.439Z" fill="#E3E3E3" />
                        <path d="M253.698 238.816C253.629 237.958 252.311 237.944 252.335 238.816C252.567 251.454 253.425 271.164 248.163 281.628C245.474 286.991 240.634 289.258 235.47 291.711C229.859 294.392 224.137 296.937 218.303 299.112C160.445 320.727 118.167 336.796 75.2401 342.38C65.9751 343.584 61.765 344.497 51.8896 341.535C36.0846 334.51 39.2265 259.619 38.9186 238.388C38.0602 180.122 33.9318 151.864 46.5677 146.373C68.6674 136.77 213.765 104.185 229.143 101.65C243.337 99.3123 245.476 109.719 246.038 111.853C247.7 118.063 251.033 188.003 251.144 197.562C251.144 198.055 251.34 198.528 251.689 198.876C252.037 199.225 252.51 199.421 253.003 199.421C253.496 199.421 253.968 199.225 254.317 198.876C254.665 198.528 254.861 198.055 254.861 197.562C255.082 179.85 252.452 125.84 250.801 116.709C250.281 111.86 248.583 107.211 245.855 103.168C243.997 98.0954 240.942 93.5458 236.95 89.9056C232.082 85.4819 226.057 82.5325 219.578 81.4009C217.64 80.9976 216.828 83.9951 218.76 84.363C232.334 86.8972 236.672 93.2328 240.413 99.1352C234.026 96.5028 227.527 98.2904 221.15 99.4567C212.817 100.983 85.2436 130.612 64.1902 136.549C48.1672 141.067 41.3929 142.509 36.9402 150.362C31.5774 140.206 16.8434 136.953 8.63023 141.89C15.5763 130.535 29.8607 125.96 41.7526 121.788C41.8745 121.729 41.9717 121.63 42.0273 121.506C42.0828 121.383 42.0931 121.244 42.0564 121.114C42.0196 120.984 41.9381 120.871 41.8262 120.795C41.7143 120.719 41.5792 120.684 41.4447 120.698C30.4309 122.243 20.1078 126.97 11.7422 134.299C2.72515 142.531 0.321705 155.101 0.305355 166.783C0.289005 178.062 -2.25614 276.693 7.63833 308.788C9.4669 316.227 13.3143 323.017 18.7563 328.408C28.2666 337.205 40.8915 342.698 53.293 346.143C62.558 349.781 74.2346 347.797 83.9519 345.753C123.835 337.385 162.159 323.953 200.328 309.862C214.446 305.109 228.199 299.332 241.476 292.577C258.145 283.473 255.145 259.071 253.698 238.816Z" fill="#E3E3E3" />
                        <path d="M488.279 457.107C485.344 446.976 469.152 438.719 460.427 439.27C464.852 421.32 462.789 365.515 444.752 311.295C448.251 310.182 451.668 308.827 454.979 307.241C455.287 307.056 455.526 306.777 455.662 306.445C455.798 306.113 455.822 305.746 455.731 305.398C453.6 296.302 451.287 287.299 449.984 278.039C449.856 277.072 448.183 277.285 448.273 278.271C449.269 287.109 450.951 295.855 453.306 304.431C436.475 311.145 418.301 313.811 400.25 312.214C393.098 311.244 386.003 309.892 378.995 308.162C377.385 307.846 376.17 310.135 377.813 310.974C378.148 311.143 378.486 311.306 378.826 311.47C377.044 324.07 376.66 363.863 376.717 376.649C376.78 393.441 378.102 433.602 380.298 443.567C374.653 443.042 369.004 444.525 364.346 447.755C360.408 450.685 354.359 456.868 355.936 462.001C356.481 463.825 363.046 465.778 372.692 466.035C381.505 466.266 392.71 463.438 397.654 459.257L397.694 459.233L397.73 459.189C400.814 456.715 399.299 447.518 397.471 445.54C400.853 419.017 402.749 392.762 405.079 364.381C405.769 355.904 406.714 348.132 412.551 341.815C426.906 351.129 430.103 363.433 434.28 379.693C436.745 389.602 438.713 399.628 440.174 409.733C443.254 429.852 443.188 437.231 445.428 443.044C445.215 444.529 445.242 446.039 445.51 447.515C445.549 448.733 445.835 449.931 446.351 451.035C446.866 452.14 447.6 453.128 448.507 453.941C448.619 454.009 460.909 460.208 466.991 461.249C474.591 462.538 490.415 464.487 488.279 457.107ZM378.775 448.733C377.08 450.845 375.074 449.881 370.526 452.69C369.048 453.612 367.7 454.727 366.518 456.006C365.471 457.146 364.842 458.557 363.433 459.252C361.395 460.263 360.643 455.164 368.3 449.736C370.938 447.859 375.829 445.077 378.775 447.526C378.932 447.688 379.019 447.905 379.019 448.13C379.019 448.355 378.932 448.572 378.775 448.733ZM436.272 373.183C433.659 364.111 430.877 354.868 424.418 347.715C418.616 341.031 410.501 336.787 401.7 335.834C401.109 335.766 401.008 336.69 401.556 336.837C404.622 337.672 407.569 338.893 410.327 340.472C402.302 346.047 402.64 360.67 400.501 385.448C398.812 404.826 396.959 425.661 396.046 445.177C386.484 445.951 386.17 444.967 383.295 444.139C383.489 439.054 378.682 415.287 380.132 343.431C380.342 333.101 381.208 322.612 380.633 312.274C397.673 319.359 426.209 316.906 443.308 311.748C463.525 392.634 456.843 420.849 458.094 438.485C456.976 439.871 455.492 440.917 453.81 441.504C452.615 441.736 451.386 441.722 450.197 441.461C449.008 441.199 447.885 440.698 446.897 439.986C446.95 434.879 446.506 429.778 445.57 424.756C444.029 407.32 440.917 390.059 436.272 373.183ZM482.205 454.66C479.714 453.497 480.818 452.862 471.719 446.213C470.923 445.63 471.359 444.183 472.422 444.526C476.414 445.804 482.807 449.704 484.047 453.246C484.437 454.361 483.104 455.08 482.205 454.66Z" fill="#E3E3E3" />
                        <path d="M419.953 185.485C418.863 179.762 419.054 173.945 418.28 168.238C419.524 167.705 420.599 166.841 421.388 165.74C422.177 164.64 422.649 163.345 422.755 161.995C422.861 160.645 422.595 159.291 421.987 158.082C421.378 156.872 420.451 155.852 419.304 155.131C424.844 148.591 432.717 140.784 432.733 131.871C432.733 125.249 427.447 119.586 421.111 120.698C419.517 112.052 409.434 106.318 397.758 112.697C396.978 108.87 394.967 105.402 392.031 102.825C389.096 100.248 385.397 98.7034 381.5 98.4266C373.568 98.1187 364.147 104.967 364.112 113.414C352.362 118.927 355.738 145.117 376.222 142.967C373.497 156.592 371.767 172.282 379.617 184.537C384.097 191.537 390.517 195.27 398.739 192.984C398.877 195.811 398.751 198.645 398.36 201.448C397.921 203.494 396.85 205.383 396.327 207.372C384.239 212.506 374.527 219.795 349.928 227.559C341.753 230.137 317.111 239.148 296.227 237.282C294.864 237.159 294.393 239.541 295.884 239.808C311.571 242.565 338.328 234.791 353.346 229.412C353.397 230.872 353.783 232.3 354.474 233.587C355.164 234.874 356.141 235.985 357.33 236.835C357.459 236.907 357.606 236.94 357.754 236.929C357.902 236.918 358.043 236.864 358.16 236.774C358.278 236.684 358.366 236.561 358.415 236.422C358.463 236.282 358.47 236.131 358.433 235.987C357.346 233.571 356.513 231.047 355.948 228.458C369.896 223.227 383.418 216.923 396.392 209.604C395.951 214.403 398.158 220.163 403.687 220.466C407.022 220.294 410.263 219.31 413.131 217.6C415.999 215.891 418.406 213.507 420.144 210.656C420.222 210.512 420.252 210.346 420.229 210.184C420.206 210.022 420.13 209.871 420.014 209.756C419.898 209.64 419.747 209.565 419.585 209.542C419.423 209.519 419.257 209.549 419.113 209.628C413.372 212.874 404.518 221.384 399.97 215.103C398.958 213.261 398.256 211.265 397.891 209.195C401.575 205.68 402.284 197.123 400.564 192.396C404.484 190.884 407.984 188.455 410.77 185.311C410.968 185.097 411.084 184.821 411.098 184.53C411.112 184.239 411.022 183.952 410.844 183.722C410.667 183.491 410.413 183.33 410.129 183.268C409.844 183.206 409.547 183.247 409.29 183.384C403.731 185.935 398.616 190.869 391.986 189.651C385.92 188.531 381.964 182.782 379.724 177.482C376.994 170.199 376.022 162.375 376.887 154.646C378.184 154.329 379.405 153.758 380.481 152.967C381.557 152.175 382.465 151.179 383.154 150.035C383.192 149.896 383.197 149.749 383.169 149.607C383.141 149.466 383.081 149.332 382.993 149.217C382.906 149.102 382.793 149.009 382.663 148.944C382.534 148.879 382.392 148.845 382.247 148.845C380.27 149.215 378.473 150.235 377.14 151.741C377.413 148.716 377.751 145.7 378.056 142.713C382.785 141.694 387.326 139.942 391.515 137.522C393.759 139.584 396.461 141.083 399.399 141.897C402.336 142.71 405.424 142.815 408.41 142.201C407.689 144.538 407.542 147.014 407.98 149.42C408.419 151.827 409.43 154.092 410.928 156.025C410.495 156.452 410.149 156.958 409.908 157.516C409.772 157.834 410.08 158.298 410.453 158.047C411.893 156.842 413.745 156.246 415.617 156.385C416.542 156.541 417.402 156.958 418.097 157.588C418.791 158.218 419.291 159.034 419.536 159.939C419.781 160.844 419.762 161.8 419.48 162.694C419.199 163.589 418.667 164.383 417.947 164.985C416.277 166.195 414.59 165.783 412.732 166.023C412.548 166.029 412.369 166.087 412.218 166.192C412.066 166.297 411.948 166.443 411.878 166.613C411.807 166.783 411.787 166.969 411.82 167.15C411.853 167.332 411.938 167.499 412.064 167.633C412.634 168.198 413.342 168.603 414.118 168.806C414.894 169.01 415.71 169.004 416.484 168.792C415.983 174.548 416.21 180.344 417.16 186.044C417.72 192.656 419.474 199.112 422.337 205.099C423.201 206.642 425.31 205.535 425.035 203.96C423.909 197.726 421.171 191.763 419.953 185.485ZM367.554 135.173C365.852 134.737 364.33 133.778 363.201 132.432C362.072 131.086 361.393 129.42 361.259 127.669C360.831 124.328 362.077 119.42 365.943 118.913C366.663 118.821 367.074 119.652 366.954 120.235C366.409 122.845 364.336 124.516 364.54 127.412C365.012 129.926 366.364 132.189 368.355 133.794C368.476 133.925 368.552 134.092 368.572 134.269C368.592 134.447 368.554 134.626 368.464 134.78C368.375 134.935 368.238 135.056 368.074 135.127C367.91 135.198 367.728 135.214 367.554 135.173ZM385.716 106.408C382.111 106.435 378.773 103.108 373.453 110.264C373.094 110.744 372.219 110.64 372.238 109.945C372.448 102.018 384.171 99.9717 386.593 104.901C386.677 105.054 386.719 105.226 386.716 105.401C386.713 105.575 386.665 105.746 386.576 105.896C386.488 106.046 386.363 106.171 386.212 106.258C386.061 106.346 385.89 106.406 385.716 106.408Z" fill="#E3E3E3" />
                    </svg>
                    <h3>Oops! You are not signed in!</h3>
                    <SignInButton className="login-btn-dashboard" />
                </div>
            )}
        </>
    );
};

export default Chats;
