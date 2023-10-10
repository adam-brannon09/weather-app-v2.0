import { useState } from "react"

function Search() {

    const [city, setCity] = useState("")

    const handleChange = (e) => setCity(e.target.value)

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