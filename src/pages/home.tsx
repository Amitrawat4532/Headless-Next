
import Link from "next/link";
import React from "react";

type Props = {
 
};


const home = ({}: Props) => {

  return (
    <>
<section className="bg-black  h-screen flex justify-center items-center w-full">
<h1 className="text-[50px] text-center p-20 cursor-pointer text-white leading-[35px] font-medium font-inter">This is Home page</h1>

    <div className=" flex flex-wrap items-center justify-center gap-20 ">


      
          
            <div className="flex flex-col justify-center items-center gap-10 p-10 border-2 border-green-400 rounded-[24px]">
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
    </>
  );
};






export default home;

