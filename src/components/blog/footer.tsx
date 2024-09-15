import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2023 AdminInsights. Todos los derechos reservados.</p>
            </div>
            <div className="flex space-x-4">
              <Link href="/privacidad" className="text-sm hover:text-secondary-foreground">Política de Privacidad</Link>
              <Link href="/terminos" className="text-sm hover:text-secondary-foreground">Términos de Servicio</Link>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer