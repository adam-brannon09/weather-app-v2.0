import { useState, useContext } from "react"
import OpenWeatherContext from "../openweather/OpenWeatherContext"


function Search() {
    const [city, setCity] = useState("")

    const { getWeather } = useContext(OpenWeatherContext)

    const handleChange = (e) => setCity(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(city)
        if (!city) {
            alert("Please enter a city")
        } else {
            console.log(city)
            getWeather(city)
            setCity("")
        }
    }


    return (
        <div className="mt-6">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative mb-10">
                        <label htmlFor="">Enter a City</label>
                        <br />
                        <div className="join tooltip" >
                            <input className="input input-bordered join-item" value={city} onChange={handleChange} placeholder="City and State" />
                            <button className="btn btn-ghost join-item rounded-r-full">Search</button>
                        </div>
                    </div>
                </div>
            </form>


        </div>
    )
}
export default Search