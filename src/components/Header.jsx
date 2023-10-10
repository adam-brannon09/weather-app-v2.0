import { Link } from 'react-router-dom'

function Header() {
    return (
        <Link to={'/'} className="navbar bg-base-100 text-center ">
            <span className="mx-auto"><a className="btn btn-ghost normal-case text-xl ">Weather App Dashboard</a></span>
        </Link>


    )
}
export default Header