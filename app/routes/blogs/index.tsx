import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { LoaderFunction } from "react-router"

type Post = {
  title: string,
  content: string
}

export const loader: LoaderFunction = () => {
  const posts = [
    {
      title: 'A',
      content: 'Co'
    },
    {
      title: 'B',
      content: 'Co 2'
    },
    {
      title: 'C',
      content: 'Co 3'
    },
  ]
  return json({ posts })
}

export default function Index() {
  const { posts } = useLoaderData<{ posts: Post[] }>()
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
