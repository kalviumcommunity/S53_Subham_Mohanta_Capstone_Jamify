import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { SignedIn, SignOutButton } from "@clerk/clerk-react";
const Sidebar = () => {
    return (
        <>
            <nav className='sidebar'>
                <div className='sidebar-routes'>
                    <div className='top'>
                        <div className='sidebar-1'>
                        <Link to="/Dashboard" style={{ textDecoration: "None" }}><div className='home'>
                                <div className='home-focus'></div>
                                <button className='home-btn'>
                                    <svg width="26" height="26" viewBox="0 0 39 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 16.1158C0 16.9449 0.637776 17.6624 1.65822 17.6624C2.15249 17.6624 2.59894 17.3914 2.99755 17.0725L4.81521 15.5418V30.3701C4.81521 32.7299 6.23426 34.133 8.67375 34.133H30.2465C32.6701 34.133 34.1051 32.7299 34.1051 30.3701V15.4621L36.0184 17.0725C36.4011 17.3914 36.8475 17.6624 37.3418 17.6624C38.2825 17.6624 39 17.0725 39 16.1477C39 15.6056 38.7927 15.1751 38.3782 14.8243L34.1051 11.2209V4.42856C34.1051 3.71106 33.6427 3.26462 32.9252 3.26462H30.7249C30.0233 3.26462 29.545 3.71106 29.545 4.42856V7.39422L21.78 0.872956C20.3929 -0.290985 18.639 -0.290985 17.2518 0.872956L0.637776 14.8243C0.207277 15.1751 0 15.6534 0 16.1158ZM24.092 20.5165C24.092 19.7671 23.6137 19.2887 22.8643 19.2887H16.1676C15.4182 19.2887 14.924 19.7671 14.924 20.5165V30.96H9.51881C8.53025 30.96 7.98814 30.402 7.98814 29.3975V12.8791L18.8144 3.79078C19.2608 3.40812 19.7711 3.40812 20.2175 3.79078L30.9162 12.7834V29.3975C30.9162 30.402 30.3741 30.96 29.3855 30.96H24.092V20.5165Z" fill="#FFFAEA" />
                                    </svg>
                                    <span className="tooltip">Home</span>
                                </button>
                            </div></Link>
                            <Link to="/Browse" style={{ textDecoration: "None" }}><div className='browse'>
                                <div className='browse-focus'></div>
                                <button className='browse-btn'>
                                    <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 15.5C0 11.3891 1.63303 7.44666 4.53985 4.53985C7.44666 1.63303 11.3891 0 15.5 0C19.6109 0 23.5533 1.63303 26.4602 4.53985C29.367 7.44666 31 11.3891 31 15.5C31 19.6109 29.367 23.5533 26.4602 26.4602C23.5533 29.367 19.6109 31 15.5 31C11.3891 31 7.44666 29.367 4.53985 26.4602C1.63303 23.5533 0 19.6109 0 15.5ZM14.5312 2.08669C13.2331 2.48194 11.9447 3.67544 10.8752 5.68075C10.5975 6.20129 10.3424 6.76446 10.1099 7.37025C11.4758 7.67444 12.9619 7.86819 14.5312 7.92631V2.08669ZM8.23244 6.85681C8.50885 6.11152 8.8195 5.41531 9.16438 4.76819C9.50158 4.13602 9.88836 3.53156 10.3211 2.9605C8.67136 3.6436 7.17279 4.64572 5.91131 5.90937C6.61398 6.26717 7.38769 6.58169 8.23244 6.85681ZM6.79869 14.5312C6.86844 12.4581 7.16294 10.4877 7.64344 8.70325C6.59417 8.36919 5.57891 7.93648 4.61125 7.41094C3.06773 9.4826 2.15179 11.954 1.97238 14.5312H6.79869ZM9.51119 9.22056C9.05371 10.956 8.79373 12.7375 8.73619 14.5312H14.5312V9.86381C12.7681 9.80569 11.0767 9.58287 9.51119 9.22056ZM16.4688 9.86188V14.5312H22.2619C22.205 12.7376 21.9456 10.956 21.4888 9.22056C19.9233 9.58287 18.2319 9.80181 16.4688 9.86188ZM8.73813 16.4688C8.80594 18.3811 9.07912 20.1771 9.51119 21.7794C11.1601 21.4051 12.8412 21.1903 14.5312 21.1381V16.4688H8.73813ZM16.4688 16.4688V21.1362C18.2319 21.1943 19.9233 21.4171 21.4888 21.7794C21.9209 20.1771 22.1941 18.3811 22.2638 16.4688H16.4688ZM10.1099 23.6298C10.3424 24.2355 10.5975 24.7987 10.8752 25.3192C11.9447 27.3246 13.2351 28.5161 14.5312 28.9133V23.0756C12.9619 23.1337 11.4758 23.3256 10.1099 23.6298ZM10.323 28.0395C9.88963 27.4685 9.5022 26.864 9.16438 26.2318C8.80828 25.5561 8.49696 24.8578 8.23244 24.1413C7.43546 24.3975 6.65945 24.7149 5.91131 25.0906C7.17279 26.3543 8.6733 27.3564 10.323 28.0395ZM7.64344 22.2968C7.14108 20.3925 6.85702 18.4372 6.79675 16.4688H1.97238C2.15179 19.046 3.06773 21.5174 4.61125 23.5891C5.52188 23.0892 6.53906 22.6552 7.64344 22.2968ZM20.6789 28.0395C22.3278 27.3568 23.8257 26.3553 25.0867 25.0926C24.3392 24.717 23.5639 24.3996 22.7676 24.1432C22.503 24.859 22.1916 25.5567 21.8356 26.2318C21.4984 26.864 21.1116 27.4684 20.6789 28.0395ZM16.4688 23.0737V28.9133C17.7669 28.5181 19.0553 27.3246 20.1248 25.3192C20.4038 24.7987 20.6589 24.2355 20.8901 23.6298C19.4363 23.3106 17.9564 23.1232 16.4688 23.0737ZM23.3566 22.2968C24.4609 22.6552 25.4781 23.0892 26.3887 23.5891C27.9323 21.5174 28.8482 19.046 29.0276 16.4688H24.2032C24.143 18.4372 23.8589 20.3925 23.3566 22.2968ZM29.0276 14.5312C28.8482 11.954 27.9323 9.4826 26.3887 7.41094C25.4781 7.91081 24.4609 8.34481 23.3566 8.70325C23.8371 10.4858 24.1316 12.4581 24.2032 14.5312H29.0276ZM21.8356 4.76819C22.1792 5.4166 22.4905 6.11281 22.7695 6.85681C23.5652 6.60034 24.3399 6.28294 25.0867 5.90744C23.8255 4.64539 22.3276 3.64461 20.6789 2.96244C21.1013 3.51075 21.4888 4.11912 21.8356 4.76819ZM20.8901 7.37025C20.669 6.79231 20.4134 6.22813 20.1248 5.68075C19.0553 3.67544 17.7669 2.48388 16.4688 2.08669V7.92438C18.0381 7.86625 19.5242 7.67444 20.8901 7.37025Z" fill="#FFFAEA" />
                                    </svg>
                                </button>
                            </div></Link>
                        </div>
                        <div class="custom-hr"></div>
                        <div className='sidebar-2'>
                            <div className='chat'>
                                <div className='chat-focus'></div>
                                <button className='chat-btn'>
                                    <svg width="26" height="26" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.07712 28.7161C7.93365 28.7161 11.6868 26.913 14.5183 24.8962C23.9479 25.0698 31 19.6204 31 12.4614C31 5.55623 24.0948 0 15.4933 0C6.89186 0 0 5.55623 0 12.4614C0 16.8557 2.72469 20.7691 6.90521 22.8126C6.33089 23.8944 5.31581 25.377 4.74149 26.1517C3.88669 27.2869 4.47436 28.7161 6.07712 28.7161ZM7.69324 25.9513C7.5196 26.0181 7.45282 25.9246 7.57303 25.7777C8.2542 24.9496 9.25592 23.6273 9.75011 22.6924C10.1508 21.9578 10.0172 21.3167 9.16243 20.916C5.08876 19.006 2.72469 15.9474 2.72469 12.4614C2.72469 7.0922 8.38776 2.72469 15.4933 2.72469C22.5989 2.72469 28.262 7.0922 28.262 12.4614C28.262 17.8307 22.5989 22.2115 15.4933 22.2115C15.2529 22.2115 14.8789 22.1982 14.4248 22.1982C13.8505 22.1848 13.4231 22.3585 12.8888 22.7725C11.2727 23.9746 8.88195 25.4705 7.69324 25.9513Z" fill="#FFFAEA" />
                                    </svg>
                                </button>
                            </div>
                            <div className='saved'>
                                <div className='saved-focus'></div>
                                <button className='saved-btn'>
                                    <svg width="26" height="26" viewBox="0 0 21 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.9664 28.938C2.77698 28.938 3.30236 28.5689 4.57827 27.4746L10.3724 22.4385C10.4325 22.3726 10.5675 22.3726 10.6276 22.4385L16.4367 27.4746C17.7127 28.5689 18.223 28.938 19.0486 28.938C20.2495 28.938 21 28.2129 21 27.0264V4.00781C21 1.38428 19.4389 0 16.4818 0H4.51823C1.56112 0 0 1.38428 0 4.00781V27.0264C0 28.2129 0.750536 28.938 1.9664 28.938ZM3.39242 24.6006C3.19728 24.772 2.95711 24.7192 2.95711 24.4688V4.1792C2.95711 3.12451 3.55754 2.61035 4.7584 2.61035H16.2416C17.4425 2.61035 18.0429 3.12451 18.0429 4.1792V24.4688C18.0429 24.7192 17.8177 24.772 17.6076 24.6006L11.4982 19.4063C10.8678 18.8525 10.1472 18.8525 9.50179 19.4063L3.39242 24.6006Z" fill="#FFFAEA" />
                                    </svg>
                                </button>
                            </div>
                            <div className='settings'>
                                <div className='settings-focus'></div>
                                <button className='settings-btn'>
                                    <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.0533 30.9715H16.9467C18.1297 30.9715 19.0561 30.2303 19.3411 29.0901L19.9113 26.5959L20.2818 26.4533L22.4625 27.8074C23.4602 28.4345 24.6432 28.2634 25.4841 27.4225L27.4795 25.4271C28.3347 24.572 28.4772 23.4032 27.8501 22.4198L26.4961 20.2391L26.6386 19.897L29.1329 19.3126C30.2589 19.0276 31 18.1012 31 16.9182V14.1103C31 12.9274 30.2731 12.0009 29.1329 11.7159L26.6529 11.1172L26.5103 10.7467L27.8644 8.58023C28.4915 7.59678 28.349 6.42805 27.4938 5.55862L25.4984 3.56322C24.6717 2.7223 23.4887 2.56552 22.491 3.17839L20.3103 4.51816L19.9113 4.37563L19.3411 1.86713C19.0561 0.726897 18.1297 0 16.9467 0H14.0533C12.8561 0 11.9297 0.726897 11.6589 1.86713L11.0887 4.37563L10.6897 4.51816L8.50897 3.17839C7.49701 2.56552 6.32828 2.7223 5.50161 3.56322L3.49195 5.55862C2.65103 6.42805 2.49425 7.59678 3.12138 8.58023L4.4754 10.7467L4.33287 11.1172L1.86713 11.7159C0.726897 12.0009 0 12.9274 0 14.1103V16.9182C0 18.1012 0.741149 19.0276 1.86713 19.3126L4.36138 19.897L4.48966 20.2391L3.13563 22.4198C2.50851 23.4032 2.66529 24.572 3.50621 25.4271L5.51586 27.4225C6.34253 28.2634 7.52552 28.4345 8.52322 27.8074L10.7039 26.4533L11.0887 26.5959L11.6589 29.0901C11.9297 30.2303 12.8561 30.9715 14.0533 30.9715ZM14.4239 28.349C14.1816 28.349 14.0533 28.2492 14.0248 28.0354L13.1697 24.5292C12.2717 24.3154 11.4023 23.9448 10.7039 23.503L7.62529 25.3986C7.44 25.5126 7.26897 25.4984 7.09793 25.3274L5.60138 23.8308C5.43034 23.674 5.43034 23.503 5.54437 23.3177L7.44 20.2391C7.04092 19.5549 6.67034 18.6998 6.45655 17.8018L2.93609 16.9609C2.7223 16.9324 2.60828 16.8041 2.60828 16.5618V14.4524C2.60828 14.1959 2.70805 14.0961 2.93609 14.0391L6.4423 13.2124C6.65609 12.2575 7.06943 11.3738 7.42575 10.7324L5.53011 7.6823C5.41609 7.48276 5.41609 7.31172 5.57287 7.14069L7.08368 5.65839C7.25471 5.50161 7.41149 5.4731 7.62529 5.60138L10.6754 7.46851C11.3168 7.06943 12.2717 6.67035 13.1839 6.4423L14.0248 2.93609C14.0533 2.7223 14.1816 2.60828 14.4239 2.60828H16.5761C16.8184 2.60828 16.9324 2.70805 16.9752 2.93609L17.8303 6.45655C18.7568 6.6846 19.5977 7.06943 20.3103 7.46851L23.3605 5.60138C23.5743 5.48736 23.731 5.50161 23.9021 5.67264L25.4129 7.15494C25.5839 7.31172 25.5839 7.48276 25.4556 7.6823L23.5743 10.7324C23.9163 11.3738 24.3439 12.2575 24.5577 13.2124L28.0639 14.0391C28.292 14.0961 28.3775 14.1959 28.3775 14.4524V16.5618C28.3775 16.8041 28.2777 16.9324 28.0639 16.9609L24.5434 17.8018C24.3297 18.6998 23.9448 19.5692 23.5457 20.2391L25.4414 23.3034C25.5554 23.503 25.5554 23.6598 25.3844 23.8166L23.8878 25.3274C23.7168 25.4984 23.5457 25.5126 23.3605 25.3986L20.2961 23.503C19.5834 23.9448 18.771 24.3012 17.8303 24.5292L16.9752 28.0354C16.9324 28.2492 16.8184 28.349 16.5761 28.349H14.4239ZM15.5071 20.8947C18.4717 20.8947 20.909 18.4575 20.909 15.4786C20.909 12.5283 18.4717 10.091 15.5071 10.091C12.5283 10.091 10.0768 12.5283 10.0768 15.4786C10.0768 18.4575 12.5283 20.8947 15.5071 20.8947ZM15.5071 18.429C13.8823 18.429 12.5568 17.1034 12.5568 15.4786C12.5568 13.8823 13.8966 12.5568 15.5071 12.5568C17.0892 12.5568 18.4147 13.8823 18.4147 15.4786C18.4147 17.0892 17.0892 18.429 15.5071 18.429Z" fill="#FFFAEA" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='logout'>
                        <SignedIn>
                            <SignOutButton>
                            <Link to="/" style={{ textDecoration: "none" }}><button className='logout-btn'>
                            <svg style={{marginLeft:"10%"}} width="26" height="26" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.70409 24.675H15.8421C18.2811 24.675 19.5462 23.3985 19.5462 20.9367V15.8079H17.3124V20.7999C17.3124 21.8599 16.7539 22.4411 15.6484 22.4411H3.88645C2.78092 22.4411 2.23385 21.8599 2.23385 20.7999V3.87505C2.23385 2.81511 2.78092 2.23385 3.88645 2.23385H15.6484C16.7539 2.23385 17.3124 2.81511 17.3124 3.87505V8.87843H19.5462V3.73829C19.5462 1.28788 18.2811 0 15.8421 0H3.70409C1.26509 0 0 1.28788 0 3.73829V20.9367C0 23.3985 1.26509 24.675 3.70409 24.675ZM11.0439 13.3803H22.5323L24.2191 13.3005L23.3871 14.0072L21.6889 15.6028C21.4837 15.7851 21.3698 16.0473 21.3698 16.3094C21.3698 16.8223 21.7573 17.2554 22.2816 17.2554C22.5551 17.2554 22.7602 17.1414 22.954 16.9477L26.6467 13.1296C26.9088 12.8561 27 12.6053 27 12.3318C27 12.0583 26.9088 11.8075 26.6467 11.534L22.954 7.70452C22.7602 7.51076 22.5551 7.40819 22.2816 7.40819C21.7573 7.40819 21.3698 7.81849 21.3698 8.34276C21.3698 8.5935 21.4837 8.86703 21.6889 9.04939L23.3871 10.6564L24.2305 11.363L22.5323 11.2718H11.0439C10.4854 11.2718 10.0068 11.7505 10.0068 12.3318C10.0068 12.913 10.4854 13.3803 11.0439 13.3803Z" fill="#FFFAEA" />
                            </svg>
                        </button></Link>
                        </SignOutButton>
                        </SignedIn>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Sidebar