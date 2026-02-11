import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditUpdate = () => {

    const { id } = useParams();
    const [data, setdata] = useState({}); 
    const navigate = useNavigate(); 

    const loadEdit = async () => {
        let api = `http://localhost:9111/mycrud/editupdatedisplay/${id}`;
        const res = await axios.get(api)
        console.log(res.data);
        setdata(res.data.stuData);
    }

    useEffect(() => {
        loadEdit();
    }, [])

    const handlechange = (e) => {
        let { name, value } = e.target;
        setdata({ ...data, [name]: value });
        console.log("updated values : ", data);
    }

    const handlesave = async () => {
        console.log("handle save : ", data);
        let api = `http://localhost:9111/mycrud/editsavedata`; 
        const res = await axios.post(api, data); 
        console.log(res.data); 
        alert(res.data.msg); 
        navigate('/edit'); 
    }

    return (
        <>
            <h2> here you can edit your student details. </h2>
            <p> edit id : {id} </p>


            <div style={{ display: "flex", flexDirection: "column", gap: "10px", margin: "10px", border: "1px solid black", width: "300px" }}>

                Edit name
                <input style={{ width: "150px", padding: "3px" }}
                    type="text"
                    name='name'
                    value={data.name} onChange={handlechange} />

                Edit city
                <input style={{ width: "150px", padding: "3px" }}
                    type="text"
                    name='city'
                    value={data.city} onChange={handlechange} />

                Edit mobile
                <input style={{ width: "150px", padding: "3px" }}
                    type="text"
                    name='mobile'
                    value={data.mobile} onChange={handlechange} />

                Edit roll
                <input style={{ width: "150px", padding: "3px" }}
                    type="text"
                    name='roll'
                    value={data.roll} onChange={handlechange} />

                <button style={{ backgroundColor: "lightblue", width: '90px', margin: "auto" }} onClick={handlesave}>save info</button>
            </div>


        </>
    )
}

export default EditUpdate; 
