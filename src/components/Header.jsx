import { Link } from 'react-router-dom'

function Header() {
    return (
        <Link to={'/'} className="navbar bg-base-100 text-center ">
            <span className="mx-auto btn btn-ghost normal-case text-4xl "> Weather App Dashboard</span>
        </Link>


    )
}
export default Header