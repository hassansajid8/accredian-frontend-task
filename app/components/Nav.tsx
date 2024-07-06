import React from 'react';
import Image from 'next/image';

const Nav = () => {
  return (
    <div className='absolute w-screen p-4 md:px-24 top-0 border-b border-blue-500'>
        <Image src="/accred-logo.png" alt="logo" width={100} height={100} />
    </div>
  )
}

export default Nav