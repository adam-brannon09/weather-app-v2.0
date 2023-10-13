import { useState, useContext } from "react"
import OpenWeatherContext from "../openweather/OpenWeatherContext"


function Search() {
    const [city, setCity] = useState("")

    const { getWeather, weather, data } = useContext(OpenWeatherContext)

    const handleChange = (e) => setCity(e.target.value)
    const handleSubmit = (e) => {
        e.preventDefault()
        getWeather(city)
        console.log(data)
        setCity("")
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <div className="relative mb-10">
                        <label htmlFor="">Enter a City</label>
                        <br />
                        <div className="join">
                            <input className="input input-bordered join-item" value={city} onChange={handleChange} placeholder="City" />
                            <button className="btn btn-ghost join-item rounded-r-full" >Subscribe</button>
                        </div>
                        <p></p>

                    </div>

                </div>
            </form>

        </div>
    )
}
export default Search