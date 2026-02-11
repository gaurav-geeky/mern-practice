import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';


const Display = () => {
    const [data, setdata] = useState([]);

    const loadData = async () => {
        let api = `http://localhost:9111/mycrud/getdata`;
        const res = await axios.get(api);
        alert(res.data.msg);
        setdata(res.data.mydata);
    }

    useEffect(() => {
        loadData();
    }, []);

    let ans = data.map((key) => (
        <tr align='center'>
            <td> {key.name} </td>
            <td> {key.roll} </td>
            <td> {key.city} </td>
            <td> {key.mobile} </td>
        </tr>
    ))


    return (
        <>
            <h1> here you can display whole data of student</h1>

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
