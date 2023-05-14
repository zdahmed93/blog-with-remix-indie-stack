import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { LoaderFunction } from "react-router"
import { getPosts } from "~/models/post.server"

// type Post = {
//   title: string,
//   content: string
// }

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>
}

export const loader: LoaderFunction = async () => {
  const posts = await getPosts()
  return json<LoaderData>({posts})
}

export default function Index() {
  const { posts} = useLoaderData<LoaderData>()
  return (
    <div>
      <h2>Blogs list</h2>
    <div>
      {
        posts.map(p => (
          <div className="border m-3">
            <h1>{p.title}</h1>
            <p>{p.content}</p>
          </div>
        ))
      }
      </div>
    </div>
  )
}
