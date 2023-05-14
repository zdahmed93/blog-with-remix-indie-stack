import { LoaderFunction } from "@remix-run/node"
import { useLoaderData } from "react-router"
import { prisma } from "~/db.server"
export const loader: LoaderFunction = async ({params}) => {
    // const post = await prisma.post.findUnique({ where: {slug: params.slug} })
    // return post
    return {title: 'Test'}
}

function SingleBlog() {
  const post = useLoaderData()
  return (
    <div>
      <h1>SingleBlog</h1>
      {/* <h2>{post.title}</h2> */}
    </div>
  )
}

export default SingleBlog