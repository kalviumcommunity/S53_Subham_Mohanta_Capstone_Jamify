import React, { useState, useRef, useEffect } from 'react'
import {
  Search, History, Plus, Menu, X,
  House,
  HomeIcon
} from 'lucide-react'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./components/ui/sheet"

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

export default function Home() {
  const [sidebarWidth, setSidebarWidth] = useState(320)
  const sidebarRef = useRef(null)
  const [isResizing, setIsResizing] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showGrid, setShowGrid] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isResizing) return
      const newWidth = e.clientX
      if (newWidth > 350 && newWidth < 480) {
        setSidebarWidth(newWidth)
      }
    }

    const handleMouseUp = () => {
      setIsResizing(false)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isResizing])

  const handleBrowse = () => {
    setShowGrid(true)
  }

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
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-4 py-2 md:px-6 md:py-2">
        <div className="w-32">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-[#121212]">
              <nav className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4">
                  <a href="/" className="text-white">
                    <svg viewBox="0 0 1134 340" className="h-8 w-24 md:h-10 md:w-32">
                      <path
                        fill="currentColor"
                        d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
                      />
                    </svg>
                  </a>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <div className="flex-1 overflow-auto py-2">
                  <div className="space-y-4 px-4">
                    <Button variant="ghost" className="w-full justify-start">
                      <History className="mr-2 h-4 w-4" />
                      Your Library
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Search className="mr-2 h-4 w-4" />
                      Search
                    </Button>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <a href="/" className="text-white flex gap-2">
            <svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 21C0 9.40202 9.40202 0 21 0C32.598 0 42 9.40202 42 21C42 32.598 32.598 42 21 42C9.40202 42 0 32.598 0 21Z" fill="#fff" />
              <path d="M10.9565 17.1569V24.8431C10.9565 25.2254 10.7698 25.5919 10.4374 25.8622C10.105 26.1325 9.65421 26.2843 9.18414 26.2843C8.71408 26.2843 8.26327 26.1325 7.93088 25.8622C7.5985 25.5919 7.41176 25.2254 7.41176 24.8431V17.1569C7.41176 16.7746 7.5985 16.4081 7.93088 16.1378C8.26327 15.8675 8.71408 15.7157 9.18414 15.7157C9.65421 15.7157 10.105 15.8675 10.4374 16.1378C10.7698 16.4081 10.9565 16.7746 10.9565 17.1569ZM15.0921 8.02941C14.622 8.02941 14.1712 8.18125 13.8388 8.45152C13.5064 8.7218 13.3197 9.08836 13.3197 9.47059V32.5294C13.3197 32.9116 13.5064 33.2782 13.8388 33.5485C14.1712 33.8187 14.622 33.9706 15.0921 33.9706C15.5621 33.9706 16.0129 33.8187 16.3453 33.5485C16.6777 33.2782 16.8645 32.9116 16.8645 32.5294V9.47059C16.8645 9.08836 16.6777 8.7218 16.3453 8.45152C16.0129 8.18125 15.5621 8.02941 15.0921 8.02941ZM21 11.8725C20.5299 11.8725 20.0791 12.0244 19.7467 12.2947C19.4144 12.5649 19.2276 12.9315 19.2276 13.3137V28.6863C19.2276 29.0685 19.4144 29.4351 19.7467 29.7053C20.0791 29.9756 20.5299 30.1275 21 30.1275C21.4701 30.1275 21.9209 29.9756 22.2533 29.7053C22.5856 29.4351 22.7724 29.0685 22.7724 28.6863V13.3137C22.7724 12.9315 22.5856 12.5649 22.2533 12.2947C21.9209 12.0244 21.4701 11.8725 21 11.8725ZM26.9079 15.7157C26.4379 15.7157 25.9871 15.8675 25.6547 16.1378C25.3223 16.4081 25.1355 16.7746 25.1355 17.1569V24.8431C25.1355 25.2254 25.3223 25.5919 25.6547 25.8622C25.9871 26.1325 26.4379 26.2843 26.9079 26.2843C27.378 26.2843 27.8288 26.1325 28.1612 25.8622C28.4936 25.5919 28.6803 25.2254 28.6803 24.8431V17.1569C28.6803 16.7746 28.4936 16.4081 28.1612 16.1378C27.8288 15.8675 27.378 15.7157 26.9079 15.7157ZM32.8159 13.7941C32.3458 13.7941 31.895 13.946 31.5626 14.2162C31.2302 14.4865 31.0435 14.8531 31.0435 15.2353V26.7647C31.0435 27.1469 31.2302 27.5135 31.5626 27.7838C31.895 28.054 32.3458 28.2059 32.8159 28.2059C33.2859 28.2059 33.7367 28.054 34.0691 27.7838C34.4015 27.5135 34.5882 27.1469 34.5882 26.7647V15.2353C34.5882 14.8531 34.4015 14.4865 34.0691 14.2162C33.7367 13.946 33.2859 13.7941 32.8159 13.7941Z" fill="#121212" />
            </svg>
            <h1 className=' text-2xl font-bold'>Jamify</h1>
          </a>
        </div>
        <div className=" flex relative flex-1 max-w-xs gap-2">
          <Button className=" h-auto bg-[#1F1F1F] border-none placeholder:text-[#B3B3B3] rounded-full focus-within:ring-white transition-all hover:bg-[#131313]" onClick={() => setTimeout(() => setShowGrid(false))}>
            <HomeIcon className='h-full w-full text-[#B3B3B3]' />
          </Button>
          <Search className="absolute right-56 top-1/2 h-6 w-6 -translate-y-1/2 text-[#B3B3B3]" />
          <Input onClick={handleBrowse}
            className="pl-11 h-12 bg-[#1F1F1F] border-none placeholder:text-[#B3B3B3] rounded-full focus-within:ring-white transition-all"
            placeholder="What do you want to play?"
          />
        </div>
        <div className="flex items-center gap-2">
          <SignedOut>
            <Button className=" hidden md:inline-flex bg-inherit hover:bg-transparent text-[#B3B3B3] hover:text-[#fff]">
              Sign up
            </Button>
            <SignInButton>
              <Button className="bg-white hover:bg-gray-200 text-black rounded-full px-4 py-1 md:px-5 md:py-5 text-sm md:text-base font-bold">
                Log in
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <div className='bg-[#3A3A3A] p-1.5 rounded-full'>
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </header>

      <div className="flex relative">
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className="bg-[#121212]  h-[calc(88vh-80px)] overflow-y-auto hidden md:block m-3 mt-0 rounded-xl"
          style={{ width: `${sidebarWidth}px` }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <button className="flex items-center gap-2 bg-inherit transition-colors hover:bg-transparent text-[#B3B3B3] hover:text-[#fff]">
                <History className="h-6 w-6 text-[#B3B3B3]" />
                <span className="font-semibold">Your recent posts</span>
              </button>
              <button className="text-[#B3B3B3] hover:text-white">
                <Plus className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="bg-[#242424] p-4 rounded-lg text-white flex flex-col gap-y-1 py-5">
                <h3 className="text-lg font-bold mb-1">Discover new creativity on Jamify</h3>
                <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-4 py-2 font-bold text-sm w-36">
                  Browse Rooms
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Resizer */}
        <div
          className="w-0.5 h-[calc(84vh-80px)] my-4 cursor-col-resize bg-[#282828] hover:bg-zinc-500 active:bg-zinc-500 hidden md:block"
          onMouseDown={() => setIsResizing(true)}
        >
        </div>

        {/* Main Content */}
        <main className="flex-1 mt-0 p-4 md:p-6 overflow-y-auto h-[calc(88vh-80px)] bg-gradient-to-b from-[#1f1f1f] to-[#121212] m-4 rounded-xl scrollable-container">

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
                      <a key={genre} href={genre.name} className="min-w-[150px] md:min-w-[200px] group">
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
                    <a key={genreall} href={genreall.name} className="min-w-[150px] md:min-w-[200px] group">
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
      </div>

      {/* Footer Preview Banner */}
      <SignedOut>
        <div className="bottom-0 left-0 right-0 bg-[#DF5F15] p-2 md:p-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-10xl">
            <div className="text-center md:text-left mb-2 md:mb-0">
              <h2 className="font-bold  ">Preview of Jamify</h2>
              <p className="text-xs md:text-sm ">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <SignUpButton>
              <Button className=" bg-white hover:bg-gray-200 text-black rounded-full px-4 py-3 md:px-5 md:py-5 text-sm md:text-base font-bold">
                Sign up
              </Button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>
      {/* Section to show the spotify player when the user is signed in */}
      <SignedIn>
        <div className="bottom-0 left-0 right-0 bg-[#000000] pl-4 pr-4">
        <iframe src="https://open.spotify.com/embed/playlist/3cYkDF2dfWuImSRkqJedWC?utm_source=generator&theme=0" width="100%" height="90" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </SignedIn>

    </div>
  )
}