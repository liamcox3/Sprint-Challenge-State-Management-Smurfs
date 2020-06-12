import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";

const Smurf = () => {
    const smurfs = useContext(DataContext);

    console.log(smurfs[0]["id"]);
    const deleteMessage = (id) => {
        axios.delete(`http://localhost:3333/smurfs/${id}`);
    };

    const deleteHandle = (e) => {
        e.preventDefault();
        deleteMessage(smurfs[0]["id"]);
    };

    return (
        <div className='note-list'>
            {smurfs.map((smurf) => (
                <div className='note' key={smurf.id}>
                    <h2>Name: {smurf.name}</h2>
                    <p>Age: {smurf.age}</p>
                    <p>Height: {smurf.height}</p>
                    <button onClick={deleteHandle}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Smurf;
