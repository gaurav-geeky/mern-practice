import React, { useState } from 'react'
import axios from "axios"

const Forms = () => {
    const [data, setData] = useState({});

    const handlechange = (e) => {
        let { name, value } = e.target;
        console.log("my value : ", value);
        setData({ ...data, [name]: value });
    };

    const handlesave = async () => {
        let api = `http://localhost:9111/mycrud/saveform`;
        const res = await axios.post(api, data);
        console.log(res.data.stuData);
        alert(res.data.msg);

    }

    return (
        <>
            <h1> fill student details here ... </h1>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", border: "1px solid black", width: "300px", padding: "5px" }}>

                enter name
                <input
                    style={{ width: "200px", padding: "2px" }}
                    type="text" name='name' onChange={handlechange} />

                enter roll
                <input
                    style={{ width: "200px", padding: "2px" }}
                    type="text" name='roll' onChange={handlechange} />

                enter city
                <input
                    style={{ width: "200px", padding: "2px" }}
                    type="text" name='city' onChange={handlechange} />

                enter mobile
                <input
                    style={{ width: "200px", padding: "2px" }}
                    type="text" name='mobile' onChange={handlechange} />

                <button
                    onClick={handlesave}
                    style={{ width: "50px", padding: "2px" }}>
                    submit
                </button>

            </div>

        </>
    )
}

export default Forms;

