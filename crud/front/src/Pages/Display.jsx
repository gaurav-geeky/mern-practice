import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Display = () => {
    const [data, setdata] = useState([]);
    const [search, setsearch] = useState("")

    const loadData = async () => {
        let api = `http://localhost:9111/mycrud/getdata`;
        const res = await axios.get(api);
        setdata(res.data.mydata);
    }

    useEffect(() => {
        loadData();
    }, []);

    const searchdata =
        search.trim() === "" ?
            data :
            data.filter((each) =>
                each.name.toLowerCase().includes(search.toLowerCase()) ||
                each.roll.toString().includes(search.toLowerCase()) ||
                each.city.toLowerCase().includes(search.toLowerCase()) ||
                each.mobile.toString().includes(search.toLowerCase())
            );


    let ans = searchdata.map((key) => (
        <tr align='center'>
            <td> {key.name} </td>
            <td> {key.roll} </td>
            <td> {key.city} </td>
            <td> {key.mobile} </td>
        </tr>
    ))



    return (
        <>
            <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>

                <h1> here you can display whole data of student</h1>
                <input
                    style={{ width: "200px", padding: "5px", height: "15px" }}
                    onChange={(e) => setsearch(e.target.value)}
                    type="text"
                    value={search}
                    placeholder='search here....' />
            </div>

            <table border={1} width={600} align='center'>
                <tr>
                    <th>Name</th>
                    <th>Roll no. </th>
                    <th> city </th>
                    <th> Mobile </th>
                </tr>
                {ans}
            </table>

        </>
    )
}

export default Display; 
