import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { ForYou } from "./foryou";

export function Main() {
    return (
        <main className="flex-1 p-6">
          <div className='flex items-center gap-3'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft/>
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight/>
            </button>
          </div>

          <h1 className='text-semibold text-3xl mt-10'>Good Afternoon</h1>

          <div className='grid grid-cols-3 gap-4 mt-4 '>
            <a href='#'  className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'> 
              <Image src='/album.jpg' width={104} height={104} alt='Album STARBOY do The Weekend'/>
              <strong>Starboy</strong>
              <button className='w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#'  className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'> 
              <Image src='/goosebumps.jfif' width={104} height={104} alt='Playlist Goosebumps'/>
              <strong>Goosebumps</strong>
              <button className='w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'> 
              <Image src='/soft10.jfif' width={104} height={104} alt='Playlist Soft 10s'/>
              <strong>Soft 10s</strong>
              <button className='w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'> 
              <Image src='/todaytopshit.jpg' width={104} height={104} alt='Playlist Todays Top Hits'/>
              <strong>Today's Top Hits</strong>
              <button className='w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'> 
              <Image src='/viralhits.jfif' width={104} height={104} alt='Album STARBOY do The Weekend'/>
              <strong>Viral Hits</strong>
              <button className='w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors'> 
              <Image src='/popup.webp' width={104} height={104} alt='Playlist Pop Up'/>
              <strong>Pop Up</strong>
              <button className='w-12 h-12 flex items-center justify-center pr-1 p-2 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play />
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Lali</h2>

          <ForYou />
          
        </main>
    )
}