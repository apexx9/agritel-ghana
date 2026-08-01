import Link from 'next/link';
import React from 'react';
import {X} from 'lucide-react';

interface NavProps{
    id: number;
    title: string;
    href: string;
}

const Nav:NavProps[] = [
    {
        id: 1,
        title: 'Home',
        href: '/'
    },
    {
        id: 2,
        title: 'About Us',
        href: '/about'
    },
    {
        id: 3,
        title: 'Our Solution',
        href: '/solution'
    },
    {
        id: 4,
        title: 'Contact',
        href: '/contact'
    }
]

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between w-50 h-screen bg-white p-6'>
        <div className="flex flex-col justify-between px-2">
            <p className='text-black text-[13px] font-medium'>Menu</p>
            <X/>
        </div>
        <nav className=''>
            {
                Nav.map((navItem) => (
                    <Link key={navItem.id} href={navItem.href}>
                        {navItem.title}
                    </Link>
                ))
            }
        </nav>
    </div>
  )
}

export default Sidebar;