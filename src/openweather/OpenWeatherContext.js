import { createContext, useReducer } from 'react';
import openWeatherReducer from './OpenWeatherReducer';

// Create a context object for OpenWeather
const OpenWeatherContext = createContext();

//Create a provider component for the OpenWeatherContext
export const OpenWeatherProvider = ({ children }) => {
    const initialState = {
        weather: "",
        loading: true,

    };
    const [state, dispatch] = useReducer(openWeatherReducer, initialState);


    //Get search results using city name or city and state

    const getWeather = async (city) => {
        setLoading();
        const country = 'USA United States of America'
        const params = new URLSearchParams({
            q: city + ',' + country,

        });

        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${params}`, {
            headers: {
                'X-RapidAPI-Key': '3c8f6ec58amsh29c21ed13e0f1e0p1dca98jsn6fe4d39b0681',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        })

        const data = await response.json();
        console.log(data);

        dispatch({
            type: 'GET_WEATHER',
            payload: data,
        });
    }

    //Set Loading
    const setLoading = () => dispatch({ type: 'SET_LOADING' });

    return (
        <OpenWeatherContext.Provider
            value={{
                ...state,
                getWeather,
            }}>
            {children}
        </OpenWeatherContext.Provider>
    );
};

export default OpenWeatherContext;