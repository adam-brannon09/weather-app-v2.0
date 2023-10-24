import Header from "../components/Header"
import Footer from "../components/Footer"
import Search from "../components/Search"
import Forecast from "../components/Forecast"


function Dashboard() {

    return (
        <div>
            <div className="w-full mx-auto lg:w-10/12">
                <Header />
                <Search />
                <Forecast />
            </div>
            <Footer />
        </div>
    )
}
export default Dashboard