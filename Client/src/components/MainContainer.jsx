import React, { useState } from 'react'
import { Button } from './ui/button';

export default function MainContainer() {

    const [showGrid, setShowGrid] = useState(false);

    const genres = [
        { name: "Hip-Hop", url: "https://upload.wikimedia.org/wikipedia/en/8/8c/Biggie_Smalls_1997.jpg" },
        { name: "Pop", url: "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/tay_1_1708267236193_1709706379350.jpg" },
        { name: "Classical", url: "https://static.toiimg.com/thumb/imgsize-23456,msid-54541282,width-600,resizemode-4/54541282.jpg" },
        { name: "Rock", url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2014_11/252081/140314-led-zep-140314-rdk-0738.jpg" },
        { name: "EDM", url: "https://images.indianexpress.com/2024/01/Ritviz_Zomaland_PR.jpg" },
        { name: "R&B", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg" },
    ];

    const genresbrowse = [
        { name: "Hip-Hop", url: "https://upload.wikimedia.org/wikipedia/en/8/8c/Biggie_Smalls_1997.jpg" },
        { name: "Pop", url: "https://www.hindustantimes.com/ht-img/img/2024/03/06/1600x900/tay_1_1708267236193_1709706379350.jpg" },
        { name: "Classical", url: "https://static.toiimg.com/thumb/imgsize-23456,msid-54541282,width-600,resizemode-4/54541282.jpg" },
        { name: "Rock", url: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2014_11/252081/140314-led-zep-140314-rdk-0738.jpg" },
        { name: "EDM", url: "https://images.indianexpress.com/2024/01/Ritviz_Zomaland_PR.jpg" },
        { name: "R&B", url: "https://upload.wikimedia.org/wikipedia/commons/b/b8/FEQ_July_2018_The_Weeknd_%2844778856382%29_%28cropped%29.jpg" },
        { name: "Country", url: "https://media.npr.org/assets/img/2019/08/14/gettyimages-1145758764-594x594_wide-11eeb25b9bf5923a16fe9216839e6e821b713822.jpg?s=1100&c=50&f=jpeg" },
        { name: "Jazz", url: "https://rollingstoneindia.com/wp-content/uploads/2017/08/3740790390_20d24b6c8b_b.jpg" },
        { name: "Metal", url: "https://loadedradio.com/wp-content/uploads/2023/06/nita-strauss-victorious-ft-dorot-1024x576.jpg" },
        { name: "Folk", url: "https://e.snmc.io/i/1200/s/a337c10bee91c9c0cb8bfb9a348266da/2418054" },
        { name: "Dubstep", url: "https://www.dissentmagazine.org/files/bobdylanlarge.gif" },
    ];

    return (
        <>
            <main className="flex-1 mt-0 p-4 md:p-6 overflow-y-auto md:h-[calc(88vh-80px)] h-[calc(85vh-80px)] bg-gradient-to-b from-[#1f1f1f] to-[#121212] rounded-xl scrollable-container">

                {!showGrid ? (
                    <>
                        <section className="mb-8">
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <h2 className="text-xl md:text-2xl font-bold">Most active users</h2>
                                <Button variant="link" className="text-zinc-400 hover:text-white">
                                    Show all
                                </Button>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
                                <a href="#" className="group relative">
                                    <div className="bg-purple-700 aspect-square rounded-full p-4 transition-all h-44">

                                    </div>
                                    <div className="text-base mt-2 ml-2">Subham<br />Mohanta</div>
                                </a>
                                <a href="#" className="group relative">
                                    <div className="bg-purple-700 aspect-square rounded-full p-4 transition-all h-44">

                                    </div>
                                    <div className="text-base mt-2 ml-2">Subham<br />Mohanta</div>
                                </a>
                                <a href="#" className="group relative">
                                    <div className="bg-purple-700 aspect-square rounded-full p-4 transition-all h-44">

                                    </div>
                                    <div className="text-base mt-2 ml-2">Subham<br />Mohanta</div>
                                </a>
                                <a href="#" className="group relative">
                                    <div className="bg-purple-700 aspect-square rounded-full p-4 transition-all h-44">

                                    </div>
                                    <div className="text-base mt-2 ml-2">Subham<br />Mohanta</div>
                                </a>
                                <a href="#" className="group relative">
                                    <div className="bg-purple-700 aspect-square rounded-full p-4 transition-all h-44">

                                    </div>
                                    <div className="text-base mt-2 ml-2">Subham<br />Mohanta</div>
                                </a>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center justify-between mb-4 md:mb-6">
                                <h2 className="text-xl md:text-2xl font-bold">Most popular rooms</h2>
                                <Button variant="link" className="text-zinc-400 hover:text-white">
                                    Show all
                                </Button>
                            </div>
                            <div className="overflow-x-auto">
                                <div className="md:gap-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {genres.map((genre) => (
                                        <a href={genre.name} className="min-w-[150px] md:min-w-[200px] group">
                                            <div className="aspect-square bg-[#242424] rounded-lg overflow-hidden mb-2 md:mb-4">
                                                <img
                                                    src={`${genre.url}?height=200&width=200&`}
                                                    alt={`${genre.name}`}
                                                    className="object-cover w-full h-full transition-all group-hover:scale-105"
                                                />
                                            </div>
                                            <h3 className="font-semibold mb-1 ">{genre.name}</h3>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </>
                ) : (
                    <section>
                        <div className="flex items-center justify-between mb-4 md:mb-6">
                            <h2 className="text-xl md:text-2xl font-bold">Browse all</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <div className="md:gap-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                                {genresbrowse.map((genreall) => (
                                    <a href={genreall.name} className="min-w-[150px] md:min-w-[200px] group">
                                        <div className="aspect-square bg-[#242424] rounded-lg overflow-hidden mb-2 md:mb-4">
                                            <img
                                                src={`${genreall.url}?height=200&width=200&`}
                                                alt={`${genreall.name}`}
                                                className="object-cover w-full h-full transition-all group-hover:scale-105"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-1 ">{genreall.name}</h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </>
    )
}
