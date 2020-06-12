import React, { useState, useContext } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";

const SmurfForm = () => {
    const addNewSmurf = useContext(DataContext);

    const [form, setForm] = useState({
        name: "",
        age: "",
        height: "",
    });

    const [post, setPost] = useState([]);

    const handleChanges = (e) => {
        console.log(form);

        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        addNewSmurf(form);
        axios
            .post("http://localhost:3333/smurfs", form)
            .then((res) => {
                setPost(res.data);
                console.log("success", post);

                setForm({ name: "", age: "", height: "" });
            })
            .catch((err) => console.log(err.response));
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                type='text'
                name='name'
                onChange={handleChanges}
                value={form.name}
            />
            <label htmlFor='age'>Age</label>
            <input
                id='age'
                type='text'
                name='age'
                onChange={handleChanges}
                value={form.age}
            />
            <label htmlFor='height'>Height</label>
            <input
                id='height'
                type='text'
                name='height'
                onChange={handleChanges}
                value={form.height}
            />

            <button type='submit'>Add Smurf</button>

            <pre>{JSON.stringify(post, null, 2)}</pre>
        </form>
    );
};

export default SmurfForm;
