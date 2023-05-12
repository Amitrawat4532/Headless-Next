import client from '@/apollo/client'
import { GET_MENUS } from '@/queries/get-menus'
import Link from 'next/link'
import React from 'react'


type Props = {
  footerMenu:any
}

 
const Footer = ({footerMenu}: Props) => {
  return (
      <div className='flex gap-10 w-full justify-center bg-[black] absolute  bottom-10  '>
      {footerMenu.map((footer:any)=>{
        return (
          <>
          
          <Link href={footer.node.path} className='text-[red] text-[20px] uppercase'>
        {footer.node.label}

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
  console.log(data)
  return {
    props: {
      footerMenu: data.footerMenu.edges,
    },
    revalidate : 10
  }
}


export default Footer