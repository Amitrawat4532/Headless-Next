import client from '@/apollo/client'
import Layout from '@/components/Layout'
import { GET_POSTS } from '@/queries/get-posts'
import Link from 'next/link'
import React from 'react'


type Props = {
  headerMenu:any
  footerMenu:any
  posts:any
}

 
const index = ({posts}: Props) => {
  return (
    <Layout className='' >
    <div className='bg-black  h-screen w-full flex flex-col justify-center items-center'>
      <h1 className='text-white text-[50px] text-center'>All blogs</h1>
      {posts.map((header:any)=>{
        return (
          <>
          <Link href={header.slug}>
          <h1 className='text-white text-[20px] uppercase'>
        {header.title}

          </h1>
          </Link>
          </>
        )
      })}
      </div>
      </Layout>


     
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query:GET_POSTS,
  })
  console.log(data)
  return {
    props: {
      posts: data.posts.nodes,
      
    },
    revalidate : 10
  }
}


export default index