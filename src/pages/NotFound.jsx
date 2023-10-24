import { Link } from 'react-router-dom'
import { FaFrownOpen, FaBolt } from 'react-icons/fa'
function NotFound() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <FaBolt className="mx-auto inline-block w-20 h-20 text-primary-600" />
                    <h1 className="text-5xl font-bold">Oops!</h1>
                    <p className="py-6">404 - Page not found! </p>
                    <Link to='/dashboard'>
                        <button className="btn btn-ghost">Back To Dashboard</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default NotFound