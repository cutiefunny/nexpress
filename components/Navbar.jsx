import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center py-4 bg-slate-800 px-8'>
            <Link className='text-white font-bold' href="/">Home</Link>
            <Link className='bg-white p-2' href="/api">api</Link>
        </nav>
    );
};

export default Navbar;
