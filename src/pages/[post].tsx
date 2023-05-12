import client from '@/apollo/client'
import { GET_POSTS } from '@/queries/get-posts'
import { GET_Singlepost } from '@/queries/get-singlepost'
import React from 'react'


type Props = {
 data:any
  posts:any
}

 
const posts = ({ data}: Props) => {
    
    

  return (
    <div className='bg-black  h-full w-full '>
      <div className=" flex flex-wrap items-center justify-center gap-20 ">
    {/* {data.map((posts: Props) => {
        return (
          <> */}
          
         
            <div className="flex flex-col justify-center items-center gap-10 p-10 border-2 border-green-400  h-screen rounded-[24px]">
              <h1
                className="text-[50px]  cursor-pointer text-white leading-[35px] font-medium font-inter"
              >
                {data.title}
              </h1>

            

              <h1
                className="mt-2 font-inter text-[18px] leading-[27px] text-white font-normal"
                dangerouslySetInnerHTML={{ __html: data.excerpt }}
              />
 {data.featuredImage && (
                <img
                  src={data.featuredImage.node.sourceUrl}
                  alt={data.title}
                  className="rounded-[16px]"
                />
                  )}
              
            </div>
          {/* </>
        );
      })} */}
      
   
</div>
     
    </div>
  )
}


export async function getStaticPaths() {
  const { data } = await client.query({
    query:GET_POSTS,
  })
const paths = data.posts.nodes.map(({ slug }: any) => ({ params: { post: slug } }))

  return {
   paths,
   fallback:false
      
  }
}
;
export async function getStaticProps({params}:any) {
    
    const  { post } = params
    const { data } = await client.query({
      query:GET_Singlepost,
      variables: {
        slug: post
    }
    })
    console.log(data)
    return {
      props: {
          data:data.postBy

      },
      revalidate : 10
    }
  }

export default posts