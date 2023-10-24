import { Link } from 'react-router-dom'

function Welcome() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-lg">
                    <h1 className="text-5xl font-bold">Welcome to the Weather Dashboard</h1>
                    <p className="py-6 text-2xl">
                        Get real-time weather for any city and state in the USA with our easy-to-use weather dashboard. Whether you're planning a trip, checking the forecast for your hometown, or just curious about the weather, Weather Dashboard has you covered. Simply enter the city and state, and we'll provide you with the latest weather conditions. Stay informed, plan better, and never get caught in unexpected weather again. </p>
                    <Link to="/dashboard">
                        <button className="btn btn-ghost">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Welcome