import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataContext } from "../context/DataContext";
// Compontents
import Smurf from "./Smurf";
import SmurfForm from "./SmurfForm";

function SmurfPage() {
    useEffect(() => {
        axios
            .get("http://localhost:3333/smurfs")
            .then((res) => {
                setSmurfs(res.data);
            })
            .catch((error) => {
                console.error("Server Error", error);
            });
    }, []);

    const [smurfs, setSmurfs] = useState([
        {
            id: "",
            name: "",
            age: "",
            height: "",
        },
    ]);

    console.log(smurfs);

    const addNewSmurf = (smurf) => {
        const newSmurf = {
            id: Date.now(),
            name: smurf.name,
            age: smurf.age,
            height: smurf.height,
        };
        setSmurfs([...smurfs, newSmurf]);
    };

    return (
        <div className='App'>
            <h1>My Smurfs</h1>
            <DataContext.Provider value={addNewSmurf}>
                <SmurfForm />
            </DataContext.Provider>
            <DataContext.Provider value={smurfs}>
                <Smurf />
            </DataContext.Provider>
        </div>
    );
}

export default SmurfPage;
