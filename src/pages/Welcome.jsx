import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">Welcome to the Weather App. A simple application that allows you to quickly review the weather.</p>
                    <Link to="/dashboard">
                        <button className="btn btn-primary">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Welcome