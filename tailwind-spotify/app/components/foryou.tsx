import Image from 'next/image';

export function ForYou() {
    return (
        <div className='grid grid-cols-8 gap-4 mt-4'>
            <a href='#' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/daily-mix/daily.jfif' className='w-full' width={104} height={104} alt='Playlist Daily Mix'/>
              <strong className='front-semibold'>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500'>Wallows, Coin, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/daily-mix/dailymix2.jfif' className='w-full' width={104} height={104} alt='Playlist Daily Mix'/>
              <strong className='front-semibold '>Daily Mix 2</strong>
              <span className='text-sm text-zinc-500 '>Ruel, The Weekend, Neriah and more</span>
            </a>

            <a href='#' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/daily-mix/dailymix3.jfif' className='w-full' width={104} height={104} alt='Playlist Daily Mix'/>
              <strong className='front-semibold '>Daily Mix 3</strong>
              <span className='text-sm text-zinc-500 '>Eminem, Adele, Lewis Capaldi and more</span>
            </a>

            <a href='#' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/daily-mix/dailymix4.jfif' className='w-full' width={104} height={104} alt='Playlist Daily Mix'/>
              <strong className='front-semibold '>Daily Mix 4</strong>
              <span className='text-sm text-zinc-500 '>Wallows, Coin, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/daily-mix/dailymix5.jfif' className='w-full' width={104} height={104} alt='Playlist Daily Mix'/>
              <strong className='front-semibold '>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500 '>Wallows, Coin, girl in red and more</span>
            </a>

            <a href='#' className='bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10'>
              <Image src='/daily-mix/dailymix5.jfif' className='w-full' width={104} height={104} alt='Playlist Daily Mix'/>
              <strong className='front-semibold '>Daily Mix 1</strong>
              <span className='text-sm text-zinc-500 '>Wallows, Coin, girl in red and more</span>
            </a>
          </div>
    )
}