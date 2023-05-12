// export default home;
import client from '@/apollo/client'
import { GET_MENUS } from '@/queries/get-menus'
import Link from 'next/link'
import React from 'react'


type Props = {
  headerMenu:any
  footerMenu:any
}

 
const Header = ({headerMenu}: Props) => {
  return (
      <div className='flex gap-10 w-full justify-end relative top-14 right-20 bg-[black]'>
      {headerMenu.map((headerMenu:any)=>{
        return (
          <>
          
          <Link href={headerMenu.node.path} className='text-[red] text-[20px] uppercase'>
        {headerMenu.node.label}

          </Link>
          
          </>
        )
      })}
      </div>

     
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query:GET_MENUS,
  })
  return {
    props: {
      headerMenu: data.headerMenu.edges,
    },
    revalidate : 10
  }
}


export default Header

