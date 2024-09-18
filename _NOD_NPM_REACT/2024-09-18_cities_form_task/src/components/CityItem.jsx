import { useState } from "react";
import citiesObj from "./CitiesPage";

function CityItem() {
    const [cities, setCities] = useState(citiesObj());
    const [newCity, setNewCity] = useState({
        city: '',
        population: '',
        location: { country: '', continent: '' },
        touristAttractions: '',
        isCapital: false,
    });

    const addCity = (e) => {
        e.preventDefault();
        const attractionsArray = newCity.touristAttractions.split(',').map(attr => attr.trim());
        setCities([...cities, { ...newCity, touristAttractions: attractionsArray }]);
        setNewCity({
            city: '',
            population: '',
            location: { country: '', continent: '' },
            touristAttractions: '',
            isCapital: false,
        });
    };

    return (
        <div>
            {cities.map((city, index) => (
                <div
                    key={index}
                    className={city.isCapital ? "capital" : ""}
                    style={{ width: cities.length % 2 !== 0 && index === cities.length - 1 ? "100%" : "50%" }}
                >
                    <h1>{city.city} {city.isCapital ? "(capital)" : ""}</h1>
                    <p>{city.city} city is located in {city.location.continent}, {city.location.country} and has a population of {city.population} people.</p>
                    {city.isCapital && <p>{city.city} is the capital of {city.location.country}.</p>}
                    
                    {/* Tourist attractions based on the count */}
                    {city.touristAttractions.length === 1 ? (
                        <p>Main Tourist attraction of {city.city} is {city.touristAttractions[0]}.</p>
                    ) : city.touristAttractions.length > 1 ? (
                        <p>Main Tourist attractions of {city.city} are {city.touristAttractions.join(', ')}.</p>
                    ) : null}
                </div>
            ))}

            {/* Form to add a new city */}
            <form onSubmit={addCity}>
                <input
                    type="text"
                    placeholder="City name"
                    value={newCity.city}
                    onChange={(e) => setNewCity({ ...newCity, city: e.target.value })}
                    required
                />
                <input
                    type="number"
                    placeholder="Population"
                    value={newCity.population}
                    onChange={(e) => setNewCity({ ...newCity, population: e.target.value })}
                    required
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={newCity.location.country}
                    onChange={(e) => setNewCity({ ...newCity, location: { ...newCity.location, country: e.target.value } })}
                    required
                />
                <input
                    type="text"
                    placeholder="Continent"
                    value={newCity.location.continent}
                    onChange={(e) => setNewCity({ ...newCity, location: { ...newCity.location, continent: e.target.value } })}
                    required
                />
                <input
                    type="text"
                    placeholder="Tourist Attractions (comma separated)"
                    value={newCity.touristAttractions}
                    onChange={(e) => setNewCity({ ...newCity, touristAttractions: e.target.value })}
                />
                <label>
                    Capital:
                    <input
                        type="checkbox"
                        checked={newCity.isCapital}
                        onChange={(e) => setNewCity({ ...newCity, isCapital: e.target.checked })}
                    />
                </label>
                <button type="submit">Add City</button>
            </form>
        </div>
    );
}

export default CityItem;


// 20% Aldas 80& GPT
