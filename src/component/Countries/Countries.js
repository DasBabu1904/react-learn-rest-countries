import React, { useEffect, useState } from 'react';
import './Countries.css';
import './country.css'

const Countries = () => {
    return (
        <div>
            <h1>Hello form Countries</h1>
            <LoadCountries ></LoadCountries>
        </div>
    );
};

function LoadCountries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h1> visiting rest of the countries</h1>
            <h3>available countries: {countries.length}</h3>
            <div className="countries-container">
                {
                    countries.map(country =>

                        <Country
                            key={country.cca3}
                            name={country.name.common}
                            population={country.population}
                            flag={country.flags.png}>

                        </Country>)
                }
            </div>
        </div>
    )
}

function Country(props) {
    return (
        <div className='countryStyle'>
            <h2>Name: {props.name}</h2>
            <h3>Population: {props.population}</h3>
            <img src={props.flag} alt="" />

        </div>
    )
}

export default Countries;