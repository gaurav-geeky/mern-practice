import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Edit = () => {

    const navigate = useNavigate();
    const [data, setdata] = useState([]);

    const loadData = async () => {
        let api = `http://localhost:9111/mycrud/editData`;
        const res = await axios.get(api);
        setdata(res.data.mydata);
        // alert(res.data.msg);
    }

    useEffect(() => {
        loadData();
    }, []);

    const myedit = (id) => {
        navigate(`/editupdate/${id}`); 
    }

    const mydelete = async (id) => {
        let api = `http://localhost:9111/mycrud/editdeletedata?id=${id}`;
        const res = await axios.delete(api);
        alert(res.data.msg); 
        loadData(); 
    }

    let ans = data.map((key) => (
        <tr align='center'>
            <td> {key.name} </td>
            <td> {key.roll} </td>
            <td> {key.city} </td>
            <td> {key.mobile} </td>
            <td>
                <button onClick={() => myedit(key._id)}> Edit </button>
            </td>
            <td>
                <button onClick={() => mydelete(key._id)}> Delete </button>
            </td>

        </tr>
    ))


    return (
        <>
            <h1> edit delete , udpate here . </h1>

            <table border={1} width={600} align='center'>
                <tr>
                    <th>name </th>
                    <th>roll no. </th>
                    <th> city </th>
                    <th> mobile </th>
                    <th>Action </th>
                    <th> Action </th>
                </tr>
                {ans}
            </table>

        </>
    )
}

export default Edit;

