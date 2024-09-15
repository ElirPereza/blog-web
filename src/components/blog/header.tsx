import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=" text-primary">
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between  items-center">
        <div className='flex items-center gap-2'>
        <MountainIcon className='h-10 w-10'/>
        <Link href="/" className="text-2xl font-bold">AdminInsights</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-secondary-foreground">Inicio</Link></li>
            <li><Link href="/articulos" className="hover:text-secondary-foreground">Artículos</Link></li>
            <li><Link href="/recursos" className="hover:text-secondary-foreground">Recursos</Link></li>
            <li><Link href="/contacto" className="hover:text-secondary-foreground">Contacto</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header