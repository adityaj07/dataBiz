import React from 'react'
import Button from './Button'

const Newsletter = () => {
  return (
    <div className='w-full  mx-auto  bg-black py-16 px-4 text-white' >
        <div className='max-w-[1240px] mx-auto px-6 grid lg:grid-cols-3 gap-4'>
            <div className='lg:col-span-2'>
                <h1 className='text-3xl md:text-4xl font-medium'>Want tips & tricks to optimize your flow ?</h1>
                <p className='py-3 text-gray-300 text-xl sm:text-2xl'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='flex flex-col'>
                <div className='sm:flex-row items-center justify-between w-full gap-4'>
                <input type="email" className='p-3 flex w-full rounded-md text-black border-none outline-none' placeholder='Enter email...' />
                <Button text="Notify Me" className="w-[150px]"/>
                </div>
            <p>We care about the protection of your data. Read our <span><a href="#" className='text-[#00fd9a] underline'>Privacy Policy</a></span> </p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter