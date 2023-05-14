import { LoaderFunction } from "@remix-run/node"
import { Link, useParams } from "@remix-run/react"

export const loader: LoaderFunction = ({ params }) => {
    console.log('====================================');
    console.log({params});
    console.log('====================================');
    return {}
}

export default function SingleTodo() {
    const params = useParams()
  return (
    <div>
        <h1>SingleTodo</h1>
        <pre>{JSON.stringify(params, null, 2)}</pre>
        <Link to="/todos/admin">Admin</Link>
    </div>
  )
}
