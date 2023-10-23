import { useContext } from 'react'
import OpenWeatherContext from '../openweather/OpenWeatherContext'
import TempIcon from '../assets/temp.svg'
import WindIcon from '../assets/wind.svg'


function Forecast() {

    const { weather } = useContext(OpenWeatherContext)
    console.log({ weather })
    const date = new Date()
    const year = date.getFullYear()
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate()
    const temp = weather?.current?.temp_f ?? ''
    const city = weather?.location?.name ?? ''
    const state = weather?.location?.region ?? ''
    const windSpeed = weather?.current?.wind_mph ?? ''
    const windDirection = weather?.current?.wind_dir ?? ''
    const windGust = weather?.current?.gust_mph ?? ''
    const feelsLike = weather?.current?.feelslike_f ?? ''
    const humidity = weather?.current?.humidity ?? ''
    const conditions = weather?.current?.condition?.text ?? ''
    const forecastIcon = weather?.current?.condition?.icon ?? ''
    const uv = weather?.current?.uv ?? ''
    const precipitation = weather?.current?.precip_in ?? ''
    const visibility = weather?.current?.vis_miles ?? ''

    if (weather) {
        return (

            <div className="card card-side bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{month} {day}, {year}</h2>
                    <p className="text-5xl pb-5">{city}, {state}</p>

                    <h3 className="text-4xl">{conditions} </h3>
                    <img src={forecastIcon} style={{ width: "70px" }} alt="" />

                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <img src={TempIcon} alt="temp icon" style={{ width: "50px" }} />
                            </div>
                            <div className="stat-title">Current Temperature</div>
                            <div className="stat-value">{temp} °F</div>
                            <div className="stat-title mt-3">Feels Like</div>
                            <div className="stat-value">{feelsLike} °F</div>
                            <div className="stat-title mt-3"> Humidity</div>
                            <div className="stat-value">{humidity} %</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure">
                                <img className="" src={WindIcon} alt="temp icon" style={{ width: "50px" }} />
                            </div>
                            <div className="stat-title">Wind Speed</div>
                            <div className="stat-value">{windSpeed} mph </div>
                            <div className="stat-title mt-3">Wind Direction</div>
                            <div className="stat-value">{windDirection}</div>
                            <div className="stat-title mt-3">Wind Gust</div>
                            <div className="stat-value">{windGust} mph</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure">
                                <img className="" src={TempIcon} alt="temp icon" style={{ width: "50px" }} />
                            </div>
                            <div className="stat-title">Precipitation</div>
                            <div className="stat-value">{precipitation}" last 24 hr </div>
                            <div className="stat-title">Visibility</div>
                            <div className="stat-value">{visibility} mi</div>
                            <div className="stat-title">UV Index</div>
                            <div className="stat-value">{uv}</div>

                        </div>

                    </div>

                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Add To Favorites</button>
                    </div> */}
                </div>
            </div>
        )
    } else {
        return (<div>Please Enter A City</div>)
    }
}

export default Forecast