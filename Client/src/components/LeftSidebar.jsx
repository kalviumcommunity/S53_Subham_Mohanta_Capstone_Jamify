import React,{useRef, useState} from 'react'
import { History, Plus, X } from 'lucide-react'
import { SignedOut } from '@clerk/clerk-react'
import { Button } from './ui/button'

export default function LeftSidebar() {


  // State for managing tooltip visibility
  const [showTooltip, setShowTooltip] = useState(false);

  // Handle the plus button click
  const handlePlusButtonClick = () => {
    setShowTooltip(true);

  };

  const handleClose = () => {
    setShowTooltip(false);
  }

  return (
    <>
      <aside
        className="w-96 bg-[#121212] h-[calc(88vh-80px)] overflow-y-auto hidden md:block mt-0 rounded-xl "
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <button className="flex items-center gap-2 bg-inherit transition-colors hover:bg-transparent text-[#B3B3B3] hover:text-[#fff]">
              <History className="h-6 w-6 text-[#B3B3B3]" />
              <span className="font-semibold">Your recent posts</span>
            </button>
            <button className="text-[#B3B3B3] hover:text-white" onClick={handlePlusButtonClick}>
              <Plus className="h-6 w-6" />
            </button>
          </div>
          <div className="space-y-4">
            <SignedOut>
              <div className="bg-[#242424] p-4 rounded-lg text-white flex flex-col gap-y-1 py-5">
                <h3 className="text-lg font-bold mb-1">Discover new creativity on Jamify</h3>
                <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-4 py-2 font-bold text-sm w-36">
                  Browse Rooms
                </Button>
              </div>
            </SignedOut>
          </div>
        </div>
      </aside>
      {showTooltip && (
        <div className='flex flex-col gap-1 text-left text-nowrap absolute bg-blue-400 text-black rounded-md p-4 z-50 right-4 w-72'>
          <div className='flex justify-between'>
            <h2 className='font-bold'>
              You’re logged out
            </h2>
            <button className="flex bg-transparent text-black p-0" onClick={handleClose}>
              <X className='w-5 h-5' />
            </button>
          </div>
          <div>
            <p className='text-xs md:text-sm'>
              Log in to perform this action
            </p>
          </div>
        </div>
      )}
    </>
  )
}
