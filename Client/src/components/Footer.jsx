import React from 'react'
import { SignedOut, SignUpButton, SignedIn } from '@clerk/clerk-react'
import { Button } from './ui/button'
import ReactPlayer from "react-player/youtube";

export default function Footer() {
  return (
    <>
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
        <div className="fixed bottom-3.5 left-0 right-0 bg-black">
          <div className="flex justify-center w-full mx-auto px-6">

            <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=${videos[currentVideoIndex]}`}
              playing={isPlaying}
              onProgress={handleProgress}
              onDuration={handleDuration}
              onEnded={playNext}
              height="0"
              width="0"
              controls={false}
            />
            <div className='w-full flex justify-between'>

              <div className='flex items-center song-name-container'>
                <h4 className='song-name'>{currentVideoTitle}</h4>
              </div>

              <div className="">
                <div className="flex items-center justify-center gap-4">
                  <div className='w-40 flex justify-evenly items-center'>
                    <Button onClick={playPrev} variant="ghost" size="icon" className="hover:scale-105 text-neutral-400 hover:text-white">
                      <SkipBack className="h-5 w-5 fill-current" />
                    </Button>
                    <Button
                      size="icon"
                      className="hover:scale-105 h-8 w-8 rounded-full bg-white hover:bg-neutral-200 text-black"
                      onClick={togglePlayPause}
                    >
                      {isPlaying ? <Pause className="h-5 w-5 fill-black" /> : <Play className="h-5 w-5 ml-0.5 fill-black" />}
                    </Button>
                    <Button onClick={playNext} variant="ghost" size="icon" className="hover:scale-105 text-neutral-400 hover:text-white">
                      <SkipForward className="h-5 w-5 fill-current" />
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2 group cursor-pointer">
                  <span className="text-xs text-neutral-400 w-10 text-center">{formatTime(progress)}</span>
                  <Slider
                    value={[progress]}
                    max={duration}
                    step={0.1}
                    onValueChange={(newValue) => handleSeek({ target: { value: newValue } })}
                    className="w-48 md:w-96"
                  />
                  <span className="text-xs text-neutral-400 w-10 text-center">{formatTime(duration)}</span>
                </div>
              </div>

              <div className='flex items-center justify-end w-56'>
                <a href={`https://www.youtube.com/watch?v=${videos[currentVideoIndex]}`} target="_blank" className='flex gap-2 text-neutral-400 hover:text-[#FF0033] transition-all'>
                  YouTube<ExternalLink className='w-5 h-5' />
                </a>
              </div>

            </div>

          </div>
        </div>
      </SignedIn>
    </>
  )
}
