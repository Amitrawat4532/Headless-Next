import Link from 'next/link'
import React from 'react'


type Props = {}

const Errorpage = (props: Props) => {
  return (
    <section>
        <div className='bg-black flex justify-center items-center flex-col h-screen'>
            <h1 className='text-red-600 text-[40px]'>Sorry !</h1>
            <h2 className='text-white text-[25px]'>We could not find that page</h2>
            <div className="flex flex-col justify-center items-center gap-10 p-10 border-2 border-green-400 rounded-[24px] mt-4">
            <Link 
          
          href="/"

          >
              <h1
                className="text-[50px]  cursor-pointer text-white leading-[35px] font-medium font-inter"
              >
               Go to home page
              </h1>
</Link>
              
            </div>
        </div>
    </section>
  )
}

export default Errorpage