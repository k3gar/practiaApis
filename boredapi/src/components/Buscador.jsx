import React from 'react';

const Buscador = () => {
/*     const API_URL = 'https://reqres.in/api/users';
    fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data)) */

/*     const API_URL = 'https://www.boredapi.com/api/activity/';
    fetch(API_URL)
        .then((response) => response.json())
        .then((activities) => {console.log(activities); console.log(activities.activity);}) */
        var prueba = {};
        fetch('https://www.boredapi.com/api/activity/')
        .then((response) => response.json())
        .then(activities => {prueba = {activities}})
        console.log(prueba)
    return (
        <div>
            <h2>Your Activity:</h2>
            <p>{prueba}</p>
        </div>
    )
}

export default Buscador
