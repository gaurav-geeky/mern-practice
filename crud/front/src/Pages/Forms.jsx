import React, { useState } from 'react'


const Forms = () => {
    const [data, setData] = useState({});

    const handlechange = () => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    };


    return (
        <>
            <h1> fill student details here ... </h1>

            <div style={{ display: "flex", flexDirection: "column" }}>

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
                    style={{ width: "50px", padding: "2px" }}
                >submit</button> 
                
            </div>

        </>
    )
}

export default Forms;

