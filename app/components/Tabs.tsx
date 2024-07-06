import Link from 'next/link'
import React from 'react'

const Tabs = () => {
    return (
        <div className='sm:w-1/2 my-3 mx-auto max-w-[80%]'>
            <div className='flex items-center justify-between px-8 py-4 rounded-full bg-blue-300 font-medium'>
                <Link href={''} className='active'>Refer</Link>
                <Link href={''}>Benefits</Link>
                <Link href={''}>FAQs</Link>
                <Link href={''}>Support</Link>
            </div>
        </div>
    )
}

export default Tabs