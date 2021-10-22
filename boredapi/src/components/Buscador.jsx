import React, { useState }  from 'react';

const Buscador = () => {
    const [tarea, setTarea] = useState('');
    const [type, setType] = useState('');
    const [link, setLink] = useState('');
    const [participants, setParticipants] = useState(0);

    function pedirActividad() {
        setType('Loading ...');
        setTarea('Loading ...');
        setLink('Loading ...');
        setParticipants('Loading ...');
        fetch('https://www.boredapi.com/api/activity/')
        .then(response => response.json())
        .then(activities => {
            setType(activities.type);
            setTarea(activities.activity);
            setParticipants(activities.participants);
            setLink(activities.link);
        })
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <h2>Your Activity:</h2>
            <p className="lead text-center">Your task is: <div className="lead text-secondary text-center">{tarea}</div> </p>
            <p className="lead text-center">Type:<div className="lead text-secondary text-center">{type}</div> </p> 
            <p className="lead text-center">Link:<div className="lead text-secondary text-center">{link}</div> </p> 
            <p className="lead text-center">Participants: <div className="lead text-secondary text-center">{participants}</div></p>
            <button type="button" className="btn btn-dark " onClick={() => pedirActividad()}>Actividad Nueva</button>
        </div>
    )
}


export default Buscador
