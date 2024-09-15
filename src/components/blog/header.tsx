import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=" text-primary">
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-center  items-center">
        <div className='flex items-center gap-2'>
        <MountainIcon className='h-10 w-10'/>
        <Link href="/" className="text-2xl font-bold">AdminInsights</Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header