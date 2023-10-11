import { useState, useEffect } from "react"


function Search() {

    const [city, setCity] = useState("")
    const handleChange = (e) => setCity(e.target.value)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const apiKey = '202feb99a1218137bb0b3c379ff2a746'
    let coordinatesUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`






    return (
        <div>
            <form>
                <div className="form-control">
                    <div className="relative mb-10">
                        <label htmlFor="">Enter a City</label>
                        <br />
                        <div className="join">
                            <input className="input input-bordered join-item" value={city} onChange={handleChange} placeholder="City" />
                            <button className="btn btn-ghost join-item rounded-r-full">Subscribe</button>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    )
}
export default Search