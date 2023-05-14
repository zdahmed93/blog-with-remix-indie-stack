import { Link, Links } from "@remix-run/react";


export default function Todos() {
  return (
    <div>
        <p>Todos Index</p>
        <Link to="admin">Admin</Link>
    </div>
  )
}
