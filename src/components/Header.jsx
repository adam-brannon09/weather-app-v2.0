import { Link } from 'react-router-dom'

function Header() {
    return (
        <Link to={'/'} className="navbar bg-base-100 text-center ">
            <span className="mx-auto my-auto btn btn-ghost normal-case text-5xl">Weather Dashboard</span>
        </Link>


    )
}
export default Header