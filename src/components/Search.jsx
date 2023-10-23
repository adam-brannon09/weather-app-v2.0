import { useState, useContext, useEffect } from "react"
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
        }
    }

    // useEffect(() => {
    //     getWeather(city)
    // }, [city])


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative mb-10">
                        <label htmlFor="">Enter a City</label>
                        <br />
                        <div className="join">
                            <input className="input input-bordered join-item" value={city} onChange={handleChange} placeholder="City" />
                            <button className="btn btn-ghost join-item rounded-r-full"  >Search</button>
                        </div>
                        <p></p>

                    </div>

                </div>
            </form>

        </div>
    )
}
export default Search