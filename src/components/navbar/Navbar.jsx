"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const links = [
    {
      title : "Home",
      path : '/'

    },
    {
      title : "About",
      path : '/about'

    },
    {
      title : "Services",
      path : '/services'

    },
    {
      title : "Contact Us",
      path : '/contact'

    }
  ]

  const handler = () => {
    router.push('/login');
  }


  return (
    
      <nav className='bg-red-50 px-6 py-4 flex justify-between items-center'>
        <h6 className='text-3xl'>Meskat</h6>
        <ul className='flex justify-between items-center space-x-4'>
            {
              links?.map((link) => <Link className={`${pathName === link.path && "text-red-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
            }
        </ul>
        <button onClick={handler} className='bg-blue-700 p-2 text-white rounded-md font-bold'>
          login
        </button>
      </nav>
    
  )
}
